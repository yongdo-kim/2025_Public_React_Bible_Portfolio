import { BookmarkEntity } from "../entities/bookmark.entity";

export interface IBookmarkService {
  getBookmarks(params: {
    bookId: number;
    chapterId: number;
  }): Promise<BookmarkEntity[]>;

  getBookmark(params: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<BookmarkEntity>;

  createBookmark(params: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<BookmarkEntity>;

  deleteBookmark(params: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<void>;
}
