export class BookmarkEntity {
  bookId: number;
  chapterId: number;
  verseId: number;

  constructor(params: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }) {
    this.bookId = params.bookId;
    this.chapterId = params.chapterId;
    this.verseId = params.verseId;
  }
}
