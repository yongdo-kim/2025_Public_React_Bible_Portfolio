import { BookmarkEntity } from "../entities/bookmark.entity";

export class BookmarkDto {
  bookId: number;
  chapterId: number;
  verseId: number;

  constructor(params: { bookId: number; chapterId: number; verseId: number }) {
    this.bookId = params.bookId;
    this.chapterId = params.chapterId;
    this.verseId = params.verseId;
  }

  static fromJson(json: Record<string, unknown>): BookmarkDto {
    return new BookmarkDto({
      bookId: (json.bookId as number) || 0,
      chapterId: (json.chapterId as number) || 0,
      verseId: (json.verseId as number) || 0,
    });
  }

  toDomain(): BookmarkEntity {
    return new BookmarkEntity({
      bookId: this.bookId,
      chapterId: this.chapterId,
      verseId: this.verseId,
    });
  }
}
