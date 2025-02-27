import { BookDto } from "../dtos/book.dto";

export interface IBookRepository {
  /**
   * 지정된 개수만큼의 책 목록을 가져옵니다.
   * @param limit 가져올 책의 개수
   * @returns Promise<BookDto[]> 책 DTO 배열
   */
  getBooks(limit: number): Promise<BookDto[]>;
}
