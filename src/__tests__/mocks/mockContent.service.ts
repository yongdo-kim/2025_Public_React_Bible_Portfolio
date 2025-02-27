import { injectable } from "inversify";
import { ContentEntity } from "../../contents/entities/content.entity";
import { IContentService } from "../../contents/interfaces/content.service.interface";

@injectable()
export class MockContentService implements IContentService {
  async getRandomVerse(): Promise<ContentEntity> {
    return new ContentEntity({
      bookName: "Test Book",
      bookId: 1,
      chapterId: 1,
      verseId: 1,
      content: "Test verse content",
      imageUrlCompressed: "https://test.com/image_compressed.jpg",
      isBookmark: false,
    });
  }

  async getAllVerses(params: {
    bookId: number;
    chapterId: number;
  }): Promise<ContentEntity[]> {
    return Array(5)
      .fill(null)
      .map(
        (_, index) =>
          new ContentEntity({
            bookName: `Test Book ${params.bookId}`,
            bookId: params.bookId,
            chapterId: params.chapterId,
            verseId: index + 1,
            content: `Test verse ${index + 1} content`,
            imageUrlCompressed: `https://test.com/image${index + 1}_compressed.jpg`,
            isBookmark: false,
          }),
      );
  }
}
