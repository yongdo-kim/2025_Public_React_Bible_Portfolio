import { CreateNoticeDto } from "../dtos/createNotice.dto";
import { NoticeHistoryEntity } from "../entities/noticeHistory.entity";
import NoticeRepository from "../repositories/notice.repository";

class NoticeService {
  constructor(private readonly noticeRepository: NoticeRepository) {}

  public async getNoticeHistories(): Promise<NoticeHistoryEntity[]> {
    const noticeHistoryDtos = await this.noticeRepository.getNoticeHistories();
    return noticeHistoryDtos.map((item) => item.toDomain());
  }

  public async createNotice({
    title,
    content,
    nickname,
  }: {
    title: string;
    content: string;
    nickname: string;
  }) {
    const createNoticeDto = new CreateNoticeDto({
      title,
      content,
      nickname,
    });
    return await this.noticeRepository.createNotice({
      createNoticeDto,
    });
  }
}

export default NoticeService;
