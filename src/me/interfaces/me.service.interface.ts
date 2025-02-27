import { MyBookmarkEntity } from "../../bookmark/entities/mybookmark.entity";

export interface IMeService {
  getMyBookmarks(): Promise<MyBookmarkEntity[]>;
}
