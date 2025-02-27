import { injectable } from "inversify";
import { NariError } from "../../_common/utils/error/error";
import { getHttp } from "../../_common/utils/https/https";
import { BookDto } from "../dtos/book.dto";
import { IBookRepository } from "../interfaces/book.repository.interface";

@injectable()
class BookRepository implements IBookRepository {
  async getBooks(limit: number): Promise<BookDto[]> {
    const endpoint = `/books?limit=${limit}`;
    try {
      const { data } = await getHttp({ url: endpoint });

      return data.map((item: BookDto) => BookDto.fromJson(item));
    } catch (e) {
      throw new NariError({
        message: `${e}`,
        statusCode: "500",
        errorCode: "UNEXPECTED_ERROR",
      });
    }
  }
}

export default BookRepository;
