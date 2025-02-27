import { BookmarkDto } from "../dtos/bookmark.dto";

export interface IBookmarkRepository {
  getBookmarks(params: {
    bookId: number;
    chapterId: number;
  }): Promise<BookmarkDto[]>;

  getBookmark(params: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<BookmarkDto>;

  createBookmark(params: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<BookmarkDto>;

  deleteBookmark(params: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<void>;
}
