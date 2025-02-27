import { useMutation } from "@tanstack/react-query";
import { TYPES } from "../../shared/constants/types";
import { container } from "../../shared/services/container";
import { BookmarkEntity } from "../entities/bookmark.entity";
import type { IBookmarkService } from "../interfaces/bookmark.service.interface";

export const useCreateBookmark = () => {
  const bookmarkService = container.get<IBookmarkService>(
    TYPES.IBookmarkService,
  );

  return useMutation<
    BookmarkEntity,
    Error,
    { bookId: number; chapterId: number; verseId: number }
  >({
    mutationFn: async (bookmarkData) => {
      return bookmarkService.createBookmark(bookmarkData);
    },
    
  });
};
