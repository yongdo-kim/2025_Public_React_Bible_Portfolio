import { useMutation } from "@tanstack/react-query";
import BookmarkRepository from "../repositories/bookmarkRepository";
import BookmarkService from "../services/bookmark.service";

export const useDeleteBookmark = () => {
  const bookmarkService = new BookmarkService(new BookmarkRepository());

  return useMutation<
    void, // 반환값이 없으므로 void로 설정
    Error,
    { bookId: number; chapterId: number; verseId: number }
  >({
    mutationFn: async (bookmarkData) => {
      return bookmarkService.deleteBookmark(bookmarkData); // 삭제 메서드 호출
    },
  });
};
