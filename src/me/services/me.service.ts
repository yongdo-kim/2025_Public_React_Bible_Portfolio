import { inject, injectable } from "inversify";
import { MyBookmarkEntity } from "../../bookmark/entities/mybookmark.entity";
import { TYPES } from "../../shared/constants/types";
import type { IMeRepository } from "../interfaces/me.repository.interface";
import type { IMeService } from "../interfaces/me.service.interface";

@injectable()
class MeService implements IMeService {
  constructor(
    @inject(TYPES.IMeRepository)
    private readonly meRepository: IMeRepository,
  ) {}

  public async getMyBookmarks(): Promise<MyBookmarkEntity[]> {
    const bookmarkDtos = await this.meRepository.getMyBookmarks();
    return bookmarkDtos.map((item) => item.toDomain());
  }
}

export default MeService;
