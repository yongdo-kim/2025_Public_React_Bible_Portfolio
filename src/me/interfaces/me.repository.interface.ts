import { MyBookmarkDto } from "../../bookmark/dtos/mybookmark.dto";

export interface IMeRepository {
  getMyBookmarks(): Promise<MyBookmarkDto[]>;
}
