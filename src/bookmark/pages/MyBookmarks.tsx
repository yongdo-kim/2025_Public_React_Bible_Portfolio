import { ROUTES } from "../../_common/navigation/constants/routes";
import { NavBar } from "../../_common/navigation/ui/HeaderNavigation";
import { Button } from "../../_common/ui/Button";
import { Column } from "../../_common/ui/Column";
import { Layout } from "../../_common/ui/Layout";
import { ListTile } from "../../_common/ui/ListTile";
import { LoadingIndicator } from "../../_common/ui/LoadingIndicator";
import { MainText } from "../../_common/ui/MainText";
import { NoData } from "../../_common/ui/NoData";
import { Row } from "../../_common/ui/Row";
import { SizeBox } from "../../_common/ui/SizeBox";
import { SubText } from "../../_common/ui/SubText";
import useNariNavigate from "../../_common/utils/hooks/useNariNavigation";

import { useMyBookmark } from "../../me/hooks/useMyBookmark";

export const MyBookmarkListPage = () => {
  const { goTo } = useNariNavigate();
  const { data, isPending, error, isError } = useMyBookmark();

  if (isPending) return <LoadingIndicator isFullScreen={true} />;
  if (isError) return <NoData>{error.message}</NoData>;

  if (data?.length === 0 || data === undefined)
    return (
      <Column>
        <NavBar />
        <Layout>
          <MainText className="text-2xl">즐겨찾기</MainText>
          <SizeBox className="h-4" />
          <Column className="h-96 items-center justify-center">
            <MainText>아직 즐겨찾기한 항목이 없어요!</MainText>
            <MainText>마음에 드는 페이지를 즐겨찾기에 추가해보세요 😊</MainText>
            <SizeBox className="h-10" />
            <Button onClick={() => goTo(ROUTES.CONTENT_DETAIL("1", "1"))}>
              보러가기
            </Button>
          </Column>
        </Layout>
      </Column>
    );

  return (
    <Column>
      <NavBar />
      <Layout>
        <MainText className="mb-2 text-2xl">즐겨찾기</MainText>
        <Row className="justify-end">
          <SubText className="mr-1">총</SubText>
          <SubText className="dark:text-emerald-500">{data.length}개</SubText>
          <SubText>를 등록했어요!</SubText>
        </Row>

        <SizeBox className="h-8" />
        <Column className="gap-y-8">
          {data.map((item, index) => (
            <ListTile
              key={index}
              listType={{
                icon: undefined,
                title:
                  `[${item.bookName} ${item.chapterId}장 ${item.verseId}절]` +
                  " " +
                  item.verse,
                path: ROUTES.CONTENT_DETAIL(
                  item?.bookId.toString(),
                  item?.chapterId.toString(),
                ),
              }}
            />
          ))}
        </Column>
      </Layout>
    </Column>
  );
};
