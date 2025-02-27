import { inject, injectable } from "inversify";
import { TYPES } from "../../shared/constants/types";
import { BookmarkEntity } from "../entities/bookmark.entity";
import type { IBookmarkRepository } from "../interfaces/bookmark.repository.interface";
import type { IBookmarkService } from "../interfaces/bookmark.service.interface";
@injectable()
class BookmarkService implements IBookmarkService {
  constructor(
    @inject(TYPES.IBookmarkRepository)
    private readonly bookmarkRepository: IBookmarkRepository,
  ) {}

  public async getBookmarks({
    bookId,
    chapterId,
  }: {
    bookId: number;
    chapterId: number;
  }): Promise<BookmarkEntity[]> {
    const bookmarkDtos = await this.bookmarkRepository.getBookmarks({
      bookId,
      chapterId,
    });

    return bookmarkDtos.map((item) => item.toDomain());
  }

  public async getBookmark({
    bookId,
    chapterId,
    verseId,
  }: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<BookmarkEntity> {
    const bookmarkDto = await this.bookmarkRepository.getBookmark({
      bookId,
      chapterId,
      verseId,
    });
    return bookmarkDto.toDomain();
  }

  public async createBookmark({
    bookId,
    chapterId,
    verseId,
  }: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<BookmarkEntity> {
    const bookmarkDto = await this.bookmarkRepository.createBookmark({
      bookId,
      chapterId,
      verseId,
    });
    return bookmarkDto.toDomain();
  }

  public async deleteBookmark({
    bookId,
    chapterId,
    verseId,
  }: {
    bookId: number;
    chapterId: number;
    verseId: number;
  }): Promise<void> {
    await this.bookmarkRepository.deleteBookmark({
      bookId,
      chapterId,
      verseId,
    });
  }
}

export default BookmarkService;
