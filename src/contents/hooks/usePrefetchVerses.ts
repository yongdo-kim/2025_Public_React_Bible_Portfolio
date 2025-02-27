import { useCallback } from "react";
import { UserEntity } from "../../_common/users/entities/user.entity";
import type { IBookmarkService } from "../../bookmark/interfaces/bookmark.service.interface";
import { queryClient } from "../../queryClient";
import { TYPES } from "../../shared/constants/types";
import { container } from "../../shared/services/container";
import { QueryKeys } from "../../shared/utils/queryKeys.enum";
import type { IContentService } from "../interfaces/content.service.interface";
export const usePrefetchVerses = (bookId?: number) => {
  const contentService = container.get<IContentService>(TYPES.IContentService);
  const bookmarkService = container.get<IBookmarkService>(
    TYPES.IBookmarkService,
  );

  return useCallback(() => {
    if (!bookId) return;

    const prefetchContent = async () => {
      return queryClient.prefetchQuery({
        queryKey: [QueryKeys.contentsAllVerses, bookId, 1],
        queryFn: async () => {
          try {
            return await contentService.getAllVerses({
              bookId: bookId,
              chapterId: 1,
            });
          } catch (error) {
            return []; // 에러 발생 시 빈 배열 반환
          }
        },
      });
    };

    const prefetchBookmarks = async () => {
      const user = queryClient.getQueryData<UserEntity>([QueryKeys.me]);
      if (!user) return;
      return queryClient.prefetchQuery({
        queryKey: [QueryKeys.myBookmarks, bookId, 1],

        queryFn: async () => {
          return await bookmarkService.getBookmarks({
            bookId: bookId,
            chapterId: 1,
          });
        },
      });
    };

    // Promise.all로 두 개의 프리페치 작업을 동시에 실행
    Promise.all([prefetchContent(), prefetchBookmarks()]);
  }, [bookId, contentService, bookmarkService]);
};
