import { ContentEntity } from "../entities/content.entity";

export class ContentDto {
  bookName: string;
  bookId: number;
  chapterId: number;
  verseId: number;
  content: string;
  imageUrlCompressed: string;

  //params를 안쓰고 그냥 생성자안에 private하면 깔끔하긴 한데,
  //뭘 어떤 키를 일치하게 넣었는지 순서 틀리면 알 수 없어서 후..
  constructor(params: {
    bookName: string;
    bookId: number;
    chapterId: number;
    verseId: number;
    content: string;
    imageUrlCompressed: string;
  }) {
    this.bookName = params.bookName;
    this.bookId = params.bookId;
    this.chapterId = params.chapterId;
    this.verseId = params.verseId;
    this.content = params.content;
    this.imageUrlCompressed = params.imageUrlCompressed;
  }

  //any를 쓰고 싶지 않아..
  static fromJson(json: Record<string, unknown>): ContentDto {
    return new ContentDto({
      bookName: (json.bookName as string) || "",
      bookId: (json.bookId as number) || 0,
      chapterId: (json.chapterId as number) || 0,
      verseId: (json.verseId as number) || 0,
      content: (json.content as string) || "",
      imageUrlCompressed: (json.imageUrlCompressed as string) || "",
    });
  }

  toDomain(): ContentEntity {
    return new ContentEntity({
      bookName: this.bookName,
      bookId: this.bookId,
      chapterId: this.chapterId,
      verseId: this.verseId,
      content: this.content,
      imageUrlCompressed: this.imageUrlCompressed,
      isBookmark: false,
    });
  }
}
