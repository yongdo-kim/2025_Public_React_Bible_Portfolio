export class ContentEntity {
  bookName: string;
  bookId: number;
  chapterId: number;
  verseId: number;
  content: string;
  imageUrlCompressed: string;
  isBookmark: boolean;

  constructor(params: {
    bookName: string;
    chapterId: number;
    verseId: number;
    bookId: number;
    content: string;
    imageUrlCompressed: string;
    isBookmark: boolean;
  }) {
    this.bookName = params.bookName;
    this.chapterId = params.chapterId;
    this.verseId = params.verseId;
    this.content = params.content;
    this.imageUrlCompressed = params.imageUrlCompressed;
    this.bookId = params.bookId;
    this.isBookmark = params.isBookmark;
  }

  copyWith(params: Partial<ContentEntity>): ContentEntity {
    return new ContentEntity({
      ...this, // 기존 객체 복사
      ...params, // 전달된 변경 사항만 덮어쓰기
    });
  }
}
