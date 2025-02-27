import { NavBar } from "../_common/navigation/ui/HeaderNavigation";
import { Divider } from "../_common/ui/Divider";
import { Layout } from "../_common/ui/Layout";
import { LoadingIndicator } from "../_common/ui/LoadingIndicator";
import { SearchBar } from "../_common/ui/SearchBar";
import { LongBooks } from "../books/components/LongBooks";
import { RecommandBooks } from "../books/components/RecommandBooks";
import { SearchBooks } from "../books/components/SearchBooks";
import { ShortBooks } from "../books/components/ShortBooks";
import { useBooks } from "../books/hooks/useBooks";
import { useFilterBooksStore } from "../books/stores/useFilterBooksStore";
import useCurrentTab from "../shared/hooks/useCurrentTab";

export const BibleTab = () => {
  useCurrentTab();
  const { data: books } = useBooks();
  const { searchTerm, setSearchTerm, filteredBooks, hasData } =
    useFilterBooksStore();

  return (
    <>
      <NavBar />
      <Layout>
        <SearchBar
          placeholder="원하는 성경 제목을 찾아볼까요?"
          onChange={(value) => setSearchTerm(value.target.value, books ?? [])}
        />
        {hasData ? (
          <SearchBooks filteredData={filteredBooks} />
        ) : searchTerm !== "" ? (
          <LoadingIndicator isFullScreen={true} />
        ) : (
          <>
            <RecommandBooks />
            <Divider className="mt-8" />
            <ShortBooks />
            <Divider className="mt-8" />
            <LongBooks />
          </>
        )}
      </Layout>
    </>
  );
};
