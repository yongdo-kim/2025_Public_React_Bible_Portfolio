import { inject, injectable } from "inversify";
import { TYPES } from "../../shared/constants/types";
import { ContentEntity } from "../entities/content.entity";
import type { IContentRepository } from "../interfaces/content.repository.interface";
import type { IContentService } from "../interfaces/content.service.interface";

@injectable()
class ContentService implements IContentService {
  constructor(
    @inject(TYPES.IContentRepository)
    private readonly contentRepository: IContentRepository,
  ) {}

  public async getRandomVerse(): Promise<ContentEntity> {
    const contentDto = await this.contentRepository.getRandomVerse();
    return contentDto.toDomain();
  }

  public async getAllVerses({
    bookId,
    chapterId,
  }: {
    bookId: number;
    chapterId: number;
  }): Promise<ContentEntity[]> {
    const contentDtos = await this.contentRepository.getAllVerses({
      bookId,
      chapterId,
    });

    return contentDtos.map((item) => {
      return item.toDomain();
    });
  }
}

export default ContentService;
