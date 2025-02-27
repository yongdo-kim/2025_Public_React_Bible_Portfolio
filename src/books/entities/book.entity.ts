export class BookEntity {
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
}
