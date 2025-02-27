import { inject, injectable } from "inversify";
import { TYPES } from "../../shared/constants/types";
import { BookEntity } from "../entities/book.entity";
import type { IBookRepository } from "../interfaces/book.repository.interface";
import type { IBookService } from "../interfaces/book.service.interface";

@injectable()
class BookService implements IBookService {
  constructor(
    @inject(TYPES.IBookRepository)
    private readonly bookRepository: IBookRepository,
  ) {}

  public async getBooks(limit: number): Promise<BookEntity[]> {
    const bookDtos = await this.bookRepository.getBooks(limit);
    return bookDtos.map((item) => item.toDomain());
  }
}

export default BookService;
