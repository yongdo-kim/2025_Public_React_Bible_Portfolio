import { injectable } from "inversify";
import { NariError } from "../../_common/utils/error/error";
import { delHttp, getHttp, postHttp } from "../../_common/utils/https/https";
import { BookmarkDto } from "../dtos/bookmark.dto";
import { IBookmarkRepository } from "../interfaces/bookmark.repository.interface";
@injectable()
class BookmarkRepository implements IBookmarkRepository {
  async getBookmarks({
    bookId,
    chapterId,
  }: {
    bookId: number;
    chapterId: number;
  }): Promise<BookmarkDto[]> {
    const endpoint = `/contents/books/${bookId}/chapters/${chapterId}/bookmarks`;

    const { data } = await getHttp({ url: endpoint });

    return data.map((item: Record<string, unknown>) =>
      BookmarkDto.fromJson(item),
    );
  }

  async getBookmark({
    bookId,
    chapterId,
    verseId,
  }: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<BookmarkDto> {
    const endpoint = `/contents/books/${bookId}/chapters/${chapterId}/verses/${verseId}/bookmarks`;
    try {
      const { data } = await getHttp({ url: endpoint });
      return BookmarkDto.fromJson(data);
    } catch (e) {
      throw new NariError({
        message: `${e}`,
        statusCode: "500",
        errorCode: "UNEXPECTED_ERROR",
      });
    }
  }

  async createBookmark({
    bookId,
    chapterId,
    verseId,
  }: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<BookmarkDto> {
    const endpoint = `/contents/books/${bookId}/chapters/${chapterId}/verses/${verseId}/bookmarks`;
    const { data } = await postHttp({ url: endpoint, body: {} });
    return BookmarkDto.fromJson(data);
  }

  async deleteBookmark({
    bookId,
    chapterId,
    verseId,
  }: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<void> {
    const endpoint = `/contents/books/${bookId}/chapters/${chapterId}/verses/${verseId}/bookmarks`;
    try {
      await delHttp({ url: endpoint });
    } catch (e) {
      throw new NariError({
        message: `${e}`,
        statusCode: "500",
        errorCode: "UNEXPECTED_ERROR",
      });
    }
  }
}
export default BookmarkRepository;
