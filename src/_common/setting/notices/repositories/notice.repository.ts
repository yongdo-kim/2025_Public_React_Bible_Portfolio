import { NariError } from "../../../utils/error/error";
import { getHttp, postHttp } from "../../../utils/https/https";
import { CreateNoticeDto } from "../dtos/createNotice.dto";
import { NoticeHistoryDto } from "../dtos/noticeHistory.dto";

class NoticeRepository {
  async getNoticeHistories(): Promise<NoticeHistoryDto[]> {
    const endpoint = `/notices`;
    try {
      const { data } = await getHttp({ url: endpoint });
      //map 형태라서.
      return data.map((item: Record<string, unknown>) =>
        NoticeHistoryDto.fromJson(item),
      );
    } catch (e) {
      throw new NariError({
        message: `${e}`,
        statusCode: "500",
        errorCode: "UNEXPECTED_ERROR",
      });
    }
  }

  async createNotice({
    createNoticeDto,
  }: {
    createNoticeDto: CreateNoticeDto;
  }) {
    const endpoint = `/notices`;
    try {
      return await postHttp({
        url: endpoint,
        body: createNoticeDto.toJson(),
      });
    } catch (e) {
      throw new NariError({
        message: `${e}`,
        statusCode: "500",
        errorCode: "UNEXPECTED_ERROR",
      });
    }
  }
}
export default NoticeRepository;
