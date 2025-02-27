import { useMutation } from "@tanstack/react-query";
import { NariError } from "../../utils/error/error";
import { postHttp } from "../../utils/https/https";

//간단한 부분에서는 repo, service, entity, dto는 생략하기로 했음.
export const useFeedback = () => {
  return useMutation({
    mutationFn: async ({
      title,
      content,
      userId,
    }: {
      title: string;
      content: string;
      userId?: number;
    }) => {
      const endpoint = `/feedbacks`;
      console.log(userId);
      try {
        const { data } = await postHttp({
          url: endpoint,
          body: { title, content, userId },
        });
        return data;
      } catch (e) {
        throw new NariError({
          message: `${e}`,
          statusCode: "500",
          errorCode: "UNEXPECTED_ERROR",
        });
      }
    },
  });
};
