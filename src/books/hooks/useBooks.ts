import { useQuery } from "@tanstack/react-query";
import { TYPES } from "../../shared/constants/types";
import { container } from "../../shared/services/container";
import { QueryKeys } from "../../shared/utils/queryKeys.enum";
import { BookEntity } from "../entities/book.entity";
import { IBookService } from "../interfaces/book.service.interface";

export const useBooks = () => {
  const bookService = container.get<IBookService>(TYPES.IBookService);

  return useQuery({
    queryKey: [QueryKeys.books],
    queryFn: async () => {
      const books = await bookService.getBooks(66);
      return books;
    },

    placeholderData: [
      {
        bookId: 2,
        bookName: "출애굽기",
        imageUrlCompressed:
          "https://nari-s3.s3.amazonaws.com/bible/compressed/2_출애굽기.webp",
      },
      {
        bookId: 3,
        bookName: "레위기",
        imageUrlCompressed:
          "https://nari-s3.s3.amazonaws.com/bible/compressed/3_레우기.webp",
      },
      {
        bookId: 4,
        bookName: "민수기",
        imageUrlCompressed:
          "https://nari-s3.s3.amazonaws.com/bible/compressed/4_민수기.webp",
      },
      {
        bookId: 5,
        bookName: "신명기",
        imageUrlCompressed:
          "https://nari-s3.s3.amazonaws.com/bible/compressed/5_신명기.webp",
      },
    ] as BookEntity[],
  });
};
