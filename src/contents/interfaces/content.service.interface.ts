import { ContentEntity } from "../entities/content.entity";

export interface IContentService {
  getRandomVerse(): Promise<ContentEntity>;
  getAllVerses(params: { bookId: number; chapterId: number }): Promise<ContentEntity[]>;
} 