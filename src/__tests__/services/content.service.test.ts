import { Container } from "inversify";
import { beforeEach, describe, expect, it } from "vitest";
import type { IContentService } from "../../contents/interfaces/content.service.interface";
import { TYPES } from "../../shared/constants/types";
import { MockContentService } from "../mocks/mockContent.service";

describe("ContentService", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container
      .bind<IContentService>(TYPES.IContentService)
      .to(MockContentService);
  });

  it("ContentService 인스턴스가 정상적으로 생성되어야 한다", () => {
    const contentService = container.get<IContentService>(
      TYPES.IContentService,
    );
    expect(contentService).toBeInstanceOf(MockContentService);
  });

  it("랜덤 구절을 올바른 데이터 구조로 반환해야 한다", async () => {
    const contentService = container.get<IContentService>(
      TYPES.IContentService,
    );
    const verse = await contentService.getRandomVerse();

    expect(verse).toEqual({
      bookName: "Test Book",
      bookId: 1,
      chapterId: 1,
      verseId: 1,
      content: "Test verse content",
      imageUrlCompressed: "https://test.com/image_compressed.jpg",
      isBookmark: false,
    });
  });

  it("모든 구절을 올바른 데이터 구조로 반환해야 한다", async () => {
    const contentService = container.get<IContentService>(
      TYPES.IContentService,
    );
    const verses = await contentService.getAllVerses({
      bookId: 1,
      chapterId: 1,
    });

    expect(verses).toHaveLength(5);
    expect(verses[0]).toEqual({
      bookName: "Test Book 1",
      bookId: 1,
      chapterId: 1,
      verseId: 1,
      content: "Test verse 1 content",
      imageUrlCompressed: "https://test.com/image1_compressed.jpg",
      isBookmark: false,
    });
  });
});
