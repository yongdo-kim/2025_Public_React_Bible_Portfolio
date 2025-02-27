import { Chip } from "../../_common/ui/Chip";
import { Column } from "../../_common/ui/Column";
import { MainText } from "../../_common/ui/MainText";
import { Row } from "../../_common/ui/Row";
import { SubText } from "../../_common/ui/SubText";
import useNariNavigate from "../../_common/utils/hooks/useNariNavigation";
import { getRandomItems } from "../../shared/utils/getRandomItems";
import { BookEntity } from "../entities/book.entity";
import { useBooks } from "../hooks/useBooks";

export const RecommandBooks = () => {
  const { data } = useBooks();

  const randomChapters = getRandomItems(data ?? [], 10);

  return (
    <Column className="mt-8">
      <MainText className="font-base text-2xl">추천 🌟</MainText>
      <SubText className="mt-1 text-lg">추천 챕터를 준비했어요</SubText>
      <Row className="mt-4 flex-wrap gap-3">
        {randomChapters.map((item: BookEntity, index: number) => (
          <RecommendChip key={index} book={item} />
        ))}
      </Row>
    </Column>
  );
};

const RecommendChip = ({ book }: { book: BookEntity }) => {
  const { goTo } = useNariNavigate();

  const handleClick = (bookId: number) => {
    goTo(`/contents/books/${bookId}/chapters/1`);
  };

  return (
    <Chip children={book.bookName} onClick={() => handleClick(book.bookId)} />
  );
};
