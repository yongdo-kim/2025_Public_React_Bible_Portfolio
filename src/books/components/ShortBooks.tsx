import { Card } from "../../_common/ui/Card";
import { Column } from "../../_common/ui/Column";
import { Grid } from "../../_common/ui/Grid";
import { ImageLoader } from "../../_common/ui/ImageLoader";
import { MainText } from "../../_common/ui/MainText";
import { Row } from "../../_common/ui/Row";
import { SubText } from "../../_common/ui/SubText";
import useNariNavigate from "../../_common/utils/hooks/useNariNavigation";
import { getSortedBookChapterMapping } from "../../shared/utils/bibleLimitNumber";
import { getRandomItems } from "../../shared/utils/getRandomItems";
import { BookEntity } from "../entities/book.entity";
import { useBooks } from "../hooks/useBooks";

export const ShortBooks = () => {
  const { data } = useBooks();

  const mapping = getSortedBookChapterMapping;
  let shorts = mapping.slice(0, 15);
  shorts = getRandomItems(shorts, 6);
  const shortChapters = shorts
    .map((short) => data?.find((item) => item.bookId === short[0]))
    .filter((item) => item !== undefined);

  return (
    <Column className="mt-8">
      <MainText className="text-2xl">"딱 좋아!👌"</MainText>
      <SubText className="mt-1 mb-4 text-lg">짧은 챕터를 준비했어요</SubText>
      <Grid className="gap-10">
        {shortChapters.map((item: BookEntity, index: number) => (
          <ShortBookCard key={index} book={item} />
        ))}
      </Grid>
    </Column>
  );
};

const ShortBookCard = ({ book }: { book: BookEntity }) => {
  const { goTo } = useNariNavigate();

  const handleClick = (bookId: number) => {
    goTo(`/contents/books/${bookId}/chapters/1`);
  };

  return (
    <Card
      className="bg-gray-100 duration-300 hover:scale-105 dark:bg-gray-800"
      onClick={() => handleClick(book.bookId)}
    >
      <Row className="h-28 w-full justify-between sm:h-34 md:h-36">
        <Column className="w-full justify-center p-4">
          <MainText className="pr-2 text-2xl font-semibold">
            {book.bookName}
          </MainText>
          <SubText className="mt-1 text-lg">{book.bookId}장 보러가기</SubText>
        </Column>

        <ImageLoader
          src={book.imageUrlCompressed}
          alt={book.bookName}
          className="h-auto w-5/12 object-cover"
          expandEffect={false}
        />
      </Row>
    </Card>
  );
};
