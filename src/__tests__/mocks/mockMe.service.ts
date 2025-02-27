import { injectable } from "inversify";
import { MyBookmarkEntity } from "../../bookmark/entities/mybookmark.entity";
import type { IMeService } from "../../me/interfaces/me.service.interface";

@injectable()
export class MockMeService implements IMeService {
  async getMyBookmarks(): Promise<MyBookmarkEntity[]> {
    return Array(3)
      .fill(null)
      .map(
        (_, index) =>
          new MyBookmarkEntity({
            id: index + 1,
            bookId: index + 1,
            chapterId: 1,
            verseId: 1,
            verse: `Test verse ${index + 1}`,
            bookName: `Test book ${index + 1}`,
          }),
      );
  }
}
