import { useQuery } from "@tanstack/react-query";
import useMe from "../../me/hooks/useMe";
import { TYPES } from "../../shared/constants/types";
import { container } from "../../shared/services/container";
import { QueryKeys } from "../../shared/utils/queryKeys.enum";
import { IBookmarkService } from "../interfaces/bookmark.service.interface";

export const useReadBookmark = ({
  bookId,
  chapterId,
}: {
  bookId: number;
  chapterId: number;
}) => {
  const bookmarkService = container.get<IBookmarkService>(
    TYPES.IBookmarkService,
  );
  const { data: user } = useMe();

  return useQuery({
    queryKey: [QueryKeys.getBookmarks, bookId, chapterId],
    queryFn: async () => {
      const content = await bookmarkService.getBookmarks({
        bookId,
        chapterId,
      });
      return content;
    },
    staleTime: 0, //새 페이지 진입마다 데이터 갱신
    enabled: !!user,
  });
};
