import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../../shared/utils/queryKeys.enum";
import { NoticeHistoryEntity } from "../entities/noticeHistory.entity";
import NoticeRepository from "../repositories/notice.repository";
import NoticeService from "../services/notice.service";

export const useNoticeHistory = () => {
  const noticeService = new NoticeService(new NoticeRepository());

  return useQuery<NoticeHistoryEntity[]>({
    queryKey: [QueryKeys.noticeHistory],
    queryFn: async () => {
      return await noticeService.getNoticeHistories();
    },
  });
};
