import { CardPreview } from "../../_common/ui/CardPreview";
import { Grid } from "../../_common/ui/Grid";
import useNariNavigate from "../../_common/utils/hooks/useNariNavigation";
import { BookEntity } from "../entities/book.entity";
import { useFilterBooksStore } from "../stores/useFilterBooksStore";

export const SearchBooks = ({
  filteredData,
}: {
  filteredData: BookEntity[];
}) => {
  const { goTo } = useNariNavigate();
  const handleClick = (bookId: number) => {
    goTo(`/contents/books/${bookId}/chapters/1`);
  };
  const { setSearchTerm } = useFilterBooksStore();

  return (
    <Grid className="mt-10 items-center gap-3">
      {filteredData.map((book, index) => (
        <li className="list-none" key={index}>
          <CardPreview
            key={index}
            className="m-4 max-w-screen-md min-w-96 bg-gray-100 dark:bg-gray-800"
            imageUrlCompressed={book.imageUrlCompressed}
            title={book.bookName}
            subtitle={`${book.bookId}장 보러가기`}
            onClick={() => {
              handleClick(book.bookId);
              setSearchTerm("", filteredData);
            }}
          />
        </li>
      ))}
    </Grid>
  );
};
