import { BookEntity } from "../entities/book.entity";

export interface IBookService {
  /**
   * 지정된 개수만큼의 책 목록을 가져옵니다.
   * @param limit 가져올 책의 개수
   * @returns Promise<BookEntity[]> 책 엔티티 배열
   */
  getBooks(limit: number): Promise<BookEntity[]>;
}
