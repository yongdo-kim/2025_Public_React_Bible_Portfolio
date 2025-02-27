import { injectable } from "inversify";
import { getHttp } from "../../_common/utils/https/https";
import { bookToChapterMapping } from "../../shared/utils/bibleLimitNumber";
import { ContentDto } from "../dtos/content.dto";
import type { IContentRepository } from "../interfaces/content.repository.interface";

@injectable()
class ContentRepository implements IContentRepository {
  //1부터 66까지 랜덤으로 1장 1절을 가져오기
  //미리 지정된 챕터 최대값을 지정
  async getRandomVerse(): Promise<ContentDto> {
    const random = Math.floor(Math.random() * 66) + 1;
    const chapter = bookToChapterMapping.get(random);
    const endpoint = `/contents/books/${random}/chapters/${chapter}/verses/1`;
    const { data } = await getHttp({ url: endpoint });
    return ContentDto.fromJson(data);
  }

  async getAllVerses(params: {
    bookId: number;
    chapterId: number;
  }): Promise<ContentDto[]> {
    const endpoint = `/contents/books/${params.bookId}/chapters/${params.chapterId}`;
    const { data } = await getHttp({ url: endpoint });
    return data.map((item: any) => ContentDto.fromJson(item));
  }
}
export default ContentRepository;
