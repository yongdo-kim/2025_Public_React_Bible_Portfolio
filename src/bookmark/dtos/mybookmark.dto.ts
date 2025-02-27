import { MyBookmarkEntity } from "../entities/mybookmark.entity";

export class MyBookmarkDto {
  id: number;
  bookId: number;
  chapterId: number;
  verseId: number;
  verse: string;
  bookName: string;

  constructor(params: {
    id: number;
    bookId: number;
    chapterId: number;
    verseId: number;
    verse: string;
    bookName: string;
  }) {
    this.id = params.id;
    this.bookId = params.bookId;
    this.chapterId = params.chapterId;
    this.verseId = params.verseId;
    this.verse = params.verse;
    this.bookName = params.bookName;
  }

  static fromJson(json: Record<string, unknown>): MyBookmarkDto {
    return new MyBookmarkDto({
      id: (json.id as number) || 0,
      bookId: (json.bookId as number) || 0,
      chapterId: (json.chapterId as number) || 0,
      verseId: (json.verseId as number) || 0,
      verse: (json.verse as string) || "",
      bookName: (json.bookName as string) || "",
    });
  }

  toDomain(): MyBookmarkEntity {
    return new MyBookmarkEntity({
      id: this.id,
      bookId: this.bookId,
      chapterId: this.chapterId,
      verseId: this.verseId,
      verse: this.verse,
      bookName: this.bookName,
    });
  }
}
