export class MyBookmarkEntity {
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
}
