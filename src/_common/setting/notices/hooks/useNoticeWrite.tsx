import { useMutation } from "@tanstack/react-query";
import { NariError } from "../../../utils/error/error";
import NoticeRepository from "../repositories/notice.repository";
import NoticeService from "../services/notice.service";

export const useNoticeWrite = () => {
  const noticeService = new NoticeService(new NoticeRepository());

  return useMutation({
    mutationFn: async ({
      title,
      content,
      nickname,
    }: {
      title: string;
      content: string;
      nickname: string;
    }) => {
      try {
        return await noticeService.createNotice({
          title,
          content,
          nickname,
        });
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
