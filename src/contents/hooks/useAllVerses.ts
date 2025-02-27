import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { NariError } from "../../_common/utils/error/error";
import { TYPES } from "../../shared/constants/types";
import { container } from "../../shared/services/container";
import { QueryKeys } from "../../shared/utils/queryKeys.enum";
import { IContentService } from "../interfaces/content.service.interface";

export const useAllVerses = ({
  bookId,
  chapterId,
}: {
  bookId: number;
  chapterId: number;
}) => {
  const contentService = container.get<IContentService>(TYPES.IContentService);
  return useQuery({
    queryKey: [QueryKeys.contentsAllVerses, bookId, chapterId],
    retry: false,
    placeholderData: keepPreviousData, //이전 데이터를 계속 유지하기 : 전체 스피너가 안덮도록
    queryFn: async () => {
      try {
        const contents = await contentService.getAllVerses({
          bookId,
          chapterId,
        });

        return contents;
      } catch (error) {
        throw new NariError(error as NariError);
      }
    },
  });
};
