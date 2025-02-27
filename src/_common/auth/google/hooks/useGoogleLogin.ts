import { useGoogleLogin } from "@react-oauth/google";
import { queryClient } from "../../../../queryClient";
import { TYPES } from "../../../../shared/constants/types";
import { container } from "../../../../shared/services/container";
import { QueryKeys } from "../../../../shared/utils/queryKeys.enum";
import { refreshAccessToken } from "../../../utils/https/https";
import { IAuthService } from "../../interfaces/auth.service.interface";
import { IAuthToken } from "../../interfaces/IAuthToken";
import { toast } from "react-hot-toast";

export const useNariGoogleLogin = () => {
  const authService = container.get<IAuthService>(TYPES.IAuthService);
  //const updatedDfs = useUserStore.getState().accessToken; :업데이트 이후 가져오도록 (비동기내에서 )

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const result: IAuthToken = await authService.googleLogin(tokenResponse);
      queryClient.invalidateQueries({ queryKey: [QueryKeys.me] });
      // 카운트다운 시작
      const expiresIn = result.expiresIn * 1000; // 초를 밀리초로 변환
      const refreshTime = expiresIn - 5 * 60 * 1000; // 5분 전 시간 계산
      setInterval(() => {
        refreshAccessToken();
      }, refreshTime);
      toast.success("구글 로그인 성공");
      return result;
    },
    onError: (error) => console.log(error),
  });

  return { googleLogin };
};
