//창세기 1장 1절 + 카드모양

import { SlArrowRightCircle } from "react-icons/sl";
import { Button } from "../../_common/ui/Button";
import { Card } from "../../_common/ui/Card";
import { Column } from "../../_common/ui/Column";
import { Grid } from "../../_common/ui/Grid";
import { ImageLoader } from "../../_common/ui/ImageLoader";
import { MainText } from "../../_common/ui/MainText";
import { Row } from "../../_common/ui/Row";
import useNariNavigate from "../../_common/utils/hooks/useNariNavigation";
import { BookEntity } from "../entities/book.entity";
import { useBooks } from "../hooks/useBooks";

export const BookCards = () => {
  const { data: books } = useBooks();

  return (
    <Grid>
      {books
        ?.slice(0, 12)
        .map((item: BookEntity, index: number) => (
          <BookCard key={index} book={item} />
        ))}
    </Grid>
  );
};

const BookCard = ({ book }: { book: BookEntity }) => {
  const { goTo } = useNariNavigate();
  const handleClick = (bookId: number) => {
    goTo(`/contents/books/${bookId}/chapters/1`);
  };
  return (
    <Column onClick={() => handleClick(book.bookId)} className="cursor-pointer">
      <Card className="mt-4">
        <ImageLoader
          className="h-52 w-full object-cover"
          src={book.imageUrlCompressed}
          alt={book.bookName}
        />
      </Card>
      <Button className="mt-5 self-end">
        <Row className="items-center justify-center gap-x-2">
          <MainText className="text-lg font-semibold text-slate-100">
            {book.bookName} 보러가기
          </MainText>
          <SlArrowRightCircle className="h-5 w-5 font-bold text-slate-100" />
        </Row>
      </Button>
    </Column>
  );
};
