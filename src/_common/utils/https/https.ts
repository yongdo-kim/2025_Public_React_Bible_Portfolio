import * as Sentry from "@sentry/react"; // Sentry 추가
import axios, { AxiosResponse } from "axios";
import { queryClient } from "../../../queryClient";
import { QueryKeys } from "../../../shared/utils/queryKeys.enum";
import { useAuthStore } from "../../auth/stores/useAuthStore";
import { NariError } from "../error/error";
import { ErrorEnum } from "../error/error.enum";
import { API_BASE_URL } from "./constants";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 쿠키를 포함하여 요청
});

const handleResponse = (response: AxiosResponse) => {
  const result = response.data; // Axios는 자동으로 JSON을 파싱
  return { data: result };
};

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Sentry.captureException(error); // 요청 에러 Sentry에 기록
    return Promise.reject(error);
  },
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data["accessToken"]) {
      useAuthStore.setState({ accessToken: response.data["accessToken"] });
    }
    return response;
  },
  (error) => {
    Sentry.captureException(error); // 응답 에러 Sentry에 기록
    return Promise.reject(error);
  },
);

const httpRequest = async (method: string, url: string, body?: object) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: body,
    });
    return handleResponse(response);
  } catch (error) {
    //400,500대를 잡아서, 캐치로 자동으로 보냄 (axios 에러)
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data;
      if (error.response) {
        // 400대 에러 처리
        if (error.response.status >= 400 && error.response.status < 500) {
          //엑세스 토큰 만료인 경우 리프레시 호출
          if (errorData.errorCode === ErrorEnum.NOT_FOUND_ACCESS_TOKEN) {
            const token = await refreshAccessToken();
            if (token) {
              const retryResponse = await axiosInstance({
                method,
                url,
                data: body,
              });
              return handleResponse(retryResponse);
            }
          }

          //일반적인 에러
          throw new NariError({
            message: errorData.message || "클라이언트 에러 발생",
            statusCode: error.response.status.toString(),
            errorCode: errorData.errorCode || ErrorEnum.UNEXPECTED_ERROR,
          });
        }
        // 500대 에러 처리
        else if (error.response.status >= 500) {
          throw new NariError({
            message: errorData.message || "서버 에러 발생",
            statusCode: error.response.status.toString(),
            errorCode: ErrorEnum.UNEXPECTED_ERROR,
          });
        }
      } else {
        // 네트워크 에러 또는 요청이 이루어지지 않은 경우
        throw new NariError({
          message: "네트워크 에러 발생",
          statusCode: "500",
          errorCode: ErrorEnum.UNEXPECTED_ERROR,
        });
      }
    }

    throw error; // 다른 에러는 그대로 던지기
  }
};

export const refreshAccessToken = async () => {
  try {
    const response = await axiosInstance.post("/auth/refresh-token");
    //인터셉터에서 이미 토큰들을 넣어준 상태, 유저 API 호출해도 잘 불러와짐
    queryClient.invalidateQueries({ queryKey: [QueryKeys.me] });
    const token = handleResponse(response);
    return token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data;

      throw new NariError({
        message: errorData.message || "서버 에러 발생",
        statusCode: errorData.statusCode || "500",
        errorCode: errorData.errorCode || ErrorEnum.UNEXPECTED_ERROR,
      });
    }
  }
};

export const getHttp = ({ url }: { url: string }) => httpRequest("GET", url);
export const postHttp = ({ url, body }: { url: string; body: object }) =>
  httpRequest("POST", url, body);
export const putHttp = (url: string, body: object) =>
  httpRequest("PUT", url, body);
export const patchHttp = (url: string, body: object) =>
  httpRequest("PATCH", url, body);
export const delHttp = ({ url }: { url: string }) => httpRequest("DELETE", url);
