import { injectable } from "inversify";
import { BookEntity } from "../../books/entities/book.entity";
import { IBookService } from "../../books/interfaces/book.service.interface";

@injectable()
export class MockBookService implements IBookService {
  async getBooks(limit: number): Promise<BookEntity[]> {
    return Array(limit)
      .fill(null)
      .map(
        (_, index) =>
          new BookEntity({
            id: index + 1,
            bookId: index + 1,
            bookName: `Test Book ${index + 1}`,
            imageUrl: `https://test.com/image${index + 1}.jpg`,
            imageUrlCompressed: `https://test.com/image${index + 1}_compressed.jpg`,
          }),
        );
  }
}
