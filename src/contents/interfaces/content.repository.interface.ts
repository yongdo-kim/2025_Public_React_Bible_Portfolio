import { ContentDto } from "../dtos/content.dto";

export interface IContentRepository {
  getRandomVerse(): Promise<ContentDto>;
  getAllVerses(params: { bookId: number; chapterId: number }): Promise<ContentDto[]>;
} 