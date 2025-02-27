import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../../_common/navigation/ui/HeaderNavigation";
import { Column } from "../../_common/ui/Column";
import { Divider } from "../../_common/ui/Divider";
import { Layout } from "../../_common/ui/Layout";
import { LoadingIndicator } from "../../_common/ui/LoadingIndicator";
import { MainText } from "../../_common/ui/MainText";
import { SizeBox } from "../../_common/ui/SizeBox";
import { SubText } from "../../_common/ui/SubText";
import { NotFoundPage } from "../../_common/utils/notFounds/NotFoundPage";
import { BookmarkEntity } from "../../bookmark/entities/bookmark.entity";
import { useReadBookmark } from "../../bookmark/hooks/useReadBookmark";
import { PageNavigation } from "../components/PageNavigation";
import { VerseItems } from "../components/VerseItems";
import { useAllVerses } from "../hooks/useAllVerses";

export const ContentDetailPage = () => {
  const { bookId, chapterId } = useParams<{
    bookId: string;
    chapterId: string;
  }>();

  const bookIdNumber = bookId ? Number(bookId) : 0;
  const chapterIdNumber = chapterId ? Number(chapterId) : 0;

  const { data: bookmarks } = useReadBookmark({
    bookId: bookIdNumber,
    chapterId: chapterIdNumber,
  });

  const { data: verses, isLoading } = useAllVerses({
    bookId: bookIdNumber,
    chapterId: chapterIdNumber,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapterId, bookId]);

  const isValidParams = () => {
    return (
      bookId && chapterId && !isNaN(bookIdNumber) && !isNaN(chapterIdNumber)
    );
  };
  if (!isValidParams()) return <NotFoundPage />;

  return (
    <Column>
      <NavBar />
      {isLoading && <LoadingIndicator isFullScreen={true} />}
      {verses && (
        <Layout>
          <ChapterHeader
            bookName={verses[0].bookName}
            chapter={verses[0].chapterId}
          />
          <SizeBox className="h-4" />
          <VerseItems
            verses={verses}
            bookmarks={
              bookmarks?.map((bookmark: BookmarkEntity) => bookmark.verseId) ??
              []
            }
          />
        </Layout>
      )}

      <Divider className="mt-5 mb-5" />
      <PageNavigation />
    </Column>
  );
};

const ChapterHeader = ({
  bookName,
  chapter,
}: {
  bookName: string;
  chapter: number;
}) => (
  <>
    <MainText className="pr-3 text-3xl font-bold text-emerald-800 dark:text-emerald-600">
      {bookName}
    </MainText>
    <SubText className="mt-2 text-2xl font-bold">{chapter}장</SubText>
  </>
);
