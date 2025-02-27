import { Container } from "inversify";
import { beforeEach, describe, expect, it } from "vitest";
import type { IBookService } from "../../books/interfaces/book.service.interface";
import { TYPES } from "../../shared/constants/types";
import { MockBookService } from "../mocks/mockBook.service";

describe("BookService", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container.bind<IBookService>(TYPES.IBookService).to(MockBookService);
  });

  it("BookService 인스턴스가 정상적으로 생성되어야 한다", () => {
    const bookService = container.get<IBookService>(TYPES.IBookService);
    expect(bookService).toBeInstanceOf(MockBookService);
  });

  it("지정된 개수만큼의 책 목록을 올바른 데이터 구조로 반환해야 한다", async () => {
    const bookService = container.get<IBookService>(TYPES.IBookService);
    const books = await bookService.getBooks(3);

    expect(books).toHaveLength(3);
    expect(books[0]).toEqual({
      id: 1,
      bookId: 1,
      bookName: "Test Book 1",
      imageUrl: "https://test.com/image1.jpg",
      imageUrlCompressed: "https://test.com/image1_compressed.jpg",
    });
  });
});
