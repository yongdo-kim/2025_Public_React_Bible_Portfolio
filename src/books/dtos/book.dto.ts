import { BookEntity } from "../entities/book.entity";

export class BookDto {
  id: number;
  bookId: number;
  bookName: string;
  imageUrl: string;
  imageUrlCompressed: string;
  constructor(params: {
    id: number;
    bookId: number;
    bookName: string;
    imageUrl: string;
    imageUrlCompressed: string;
  }) {
    this.id = params.id;
    this.bookId = params.bookId;
    this.bookName = params.bookName;
    this.imageUrl = params.imageUrl;
    this.imageUrlCompressed = params.imageUrlCompressed;
  }

  static fromJson(json: BookEntity): BookDto {
    return new BookDto({
      id: json.id,
      bookId: json.bookId,
      bookName: json.bookName,
      imageUrl: json.imageUrl,
      imageUrlCompressed: json.imageUrlCompressed,
    });
  }

  toDomain(): BookEntity {
    return new BookEntity({
      id: this.id,
      bookId: this.bookId,
      bookName: this.bookName,
      imageUrl: this.imageUrl,
      imageUrlCompressed: this.imageUrlCompressed,
    });
  }
}
