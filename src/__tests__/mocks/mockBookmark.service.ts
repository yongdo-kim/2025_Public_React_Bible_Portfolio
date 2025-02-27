import { injectable } from "inversify";
import { BookmarkEntity } from "../../bookmark/entities/bookmark.entity";
import type { IBookmarkService } from "../../bookmark/interfaces/bookmark.service.interface";

@injectable()
export class MockBookmarkService implements IBookmarkService {
  async getBookmarks(params: {
    bookId: number;
    chapterId: number;
  }): Promise<BookmarkEntity[]> {
    return Array(3)
      .fill(null)
      .map(
        (_, index) =>
          new BookmarkEntity({
            bookId: params.bookId,
            chapterId: params.chapterId,
            verseId: index + 1,
          }),
      );
  }

  async getBookmark(params: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<BookmarkEntity> {
    return new BookmarkEntity({
      bookId: params.bookId,
      chapterId: params.chapterId,
      verseId: params.verseId,
    });
  }

  async createBookmark(params: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<BookmarkEntity> {
    return new BookmarkEntity({
      bookId: params.bookId,
      chapterId: params.chapterId,
      verseId: params.verseId,
    });
  }

  async deleteBookmark(params: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<void> {
    // 삭제 동작 모의
    console.log("", params);
    return Promise.resolve();
  }
}
