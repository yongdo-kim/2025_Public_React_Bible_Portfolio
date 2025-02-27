import { Container } from "inversify";
import { beforeEach, describe, expect, it } from "vitest";
import { IBookmarkService } from "../../bookmark/interfaces/bookmark.service.interface";
import { TYPES } from "../../shared/constants/types";
import { MockBookmarkService } from "../mocks/mockBookmark.service";

describe("BookmarkService", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container
      .bind<IBookmarkService>(TYPES.IBookmarkService)
      .to(MockBookmarkService);
  });

  it("BookmarkService 인스턴스가 정상적으로 생성되어야 한다", () => {
    const bookmarkService = container.get<IBookmarkService>(
      TYPES.IBookmarkService,
    );
    expect(bookmarkService).toBeInstanceOf(MockBookmarkService);
  });

  it("북마크 목록을 올바른 데이터 구조로 반환해야 한다", async () => {
    const bookmarkService = container.get<IBookmarkService>(
      TYPES.IBookmarkService,
    );
    const bookmarks = await bookmarkService.getBookmarks({
      bookId: 1,
      chapterId: 1,
    });

    expect(bookmarks).toHaveLength(3);
    expect(bookmarks[0]).toEqual({
      bookId: 1,
      chapterId: 1,
      verseId: 1,
    });
  });

  it("북마크 생성이 올바른 데이터로 이루어져야 한다", async () => {
    const bookmarkService = container.get<IBookmarkService>(
      TYPES.IBookmarkService,
    );
    const bookmark = await bookmarkService.createBookmark({
      bookId: 1,
      chapterId: 1,
      verseId: 1,
    });

    expect(bookmark).toEqual({
      bookId: 1,
      chapterId: 1,
      verseId: 1,
    });
  });

  it("북마크 삭제가 에러 없이 완료되어야 한다", async () => {
    const bookmarkService = container.get<IBookmarkService>(
      TYPES.IBookmarkService,
    );
    await expect(
      bookmarkService.deleteBookmark({
        bookId: 1,
        chapterId: 1,
        verseId: 1,
      }),
    ).resolves.not.toThrow();
  });
});
