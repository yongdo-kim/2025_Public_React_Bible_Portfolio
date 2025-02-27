import { CardPreview } from "../../_common/ui/CardPreview";
import { Column } from "../../_common/ui/Column";
import { Grid } from "../../_common/ui/Grid";
import { MainText } from "../../_common/ui/MainText";
import { SubText } from "../../_common/ui/SubText";
import useNariNavigate from "../../_common/utils/hooks/useNariNavigation";
import { getSortedBookChapterMapping } from "../../shared/utils/bibleLimitNumber";
import { getRandomItems } from "../../shared/utils/getRandomItems";
import { BookEntity } from "../entities/book.entity";
import { useBooks } from "../hooks/useBooks";

export const LongBooks = () => {
  const { data } = useBooks();

  const mapping = getSortedBookChapterMapping;
  let longs = mapping.slice(-10);
  longs = getRandomItems(longs, 6);
  const longChapters = longs
    .map((short) => data?.find((item) => item.bookId === short[0]))
    .filter((item) => item !== undefined);

  return (
    <Column className="mt-8">
      <MainText className="text-2xl">도전 해볼까요? 🎯</MainText>
      <SubText className="mt-1 mb-4 text-lg">긴 챕터를 준비했어요</SubText>
      <Grid className="mt-4">
        {longChapters.map((item: BookEntity, index: number) => (
          <LongBookCard key={index} book={item} />
        ))}
      </Grid>
    </Column>
  );
};

const LongBookCard = ({ book }: { book: BookEntity }) => {
  const { goTo } = useNariNavigate();

  const handleClick = (bookId: number) => {
    goTo(`/contents/books/${bookId}/chapters/1`);
  };

  return (
    <CardPreview
      className="m-4 bg-gray-100 dark:bg-gray-800"
      imageUrlCompressed={book.imageUrlCompressed}
      title={book.bookName}
      subtitle={`${book.bookId}장 보러가기`}
      onClick={() => handleClick(book.bookId)}
    />
  );
};
