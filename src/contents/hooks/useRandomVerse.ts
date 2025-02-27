import { container } from "../../shared/services/container";

import { useQuery } from "@tanstack/react-query";
import { TYPES } from "../../shared/constants/types";
import { QueryKeys } from "../../shared/utils/queryKeys.enum";
import { ContentEntity } from "../entities/content.entity";
import { IContentService } from "../interfaces/content.service.interface";

export const useRandomVerse = () => {
  const contentService = container.get<IContentService>(TYPES.IContentService);

  return useQuery({
    queryKey: [QueryKeys.contentsRandomVerse],
    queryFn: async () => {
      const content = await contentService.getRandomVerse();
      return content;
    },
    //로딩스피너보다, 데이터를 넣어서 로딩 처리 진행
    placeholderData: {
      bookName: "창세기",
      bookId: 1,
      chapterId: 1,
      verseId: 1,
      content: "태초에 하나님이 천지를 창조하시니라",
      imageUrlCompressed:
        "https://nari-s3.s3.amazonaws.com/bible/compressed/1_창세기.webp",
      isBookmark: false,
    } as ContentEntity,
  });
};
