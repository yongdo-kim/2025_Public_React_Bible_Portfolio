import { injectable } from "inversify";
import { NariError } from "../../_common/utils/error/error";
import { getHttp } from "../../_common/utils/https/https";
import { MyBookmarkDto } from "../../bookmark/dtos/mybookmark.dto";
import type { IMeRepository } from "../interfaces/me.repository.interface";

@injectable()
class MeRepository implements IMeRepository {
  async getMyBookmarks(): Promise<MyBookmarkDto[]> {
    const endpoint = `/me/bookmarks`;
    try {
      const { data } = await getHttp({ url: endpoint });

      //map 형태라서.
      return data.map((item: Record<string, unknown>) =>
        MyBookmarkDto.fromJson(item),
      );
    } catch (e) {
      throw new NariError({
        message: `${e}`,
        statusCode: "500",
        errorCode: "UNEXPECTED_ERROR",
      });
    }
  }
}

export default MeRepository;
