import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { NavBar } from "../../../navigation/ui/HeaderNavigation";
import { Column } from "../../../ui/Column";
import { Divider } from "../../../ui/Divider";
import { Layout } from "../../../ui/Layout";
import { LoadingIndicator } from "../../../ui/LoadingIndicator";
import { MainText } from "../../../ui/MainText";
import { Row } from "../../../ui/Row";
import { SubText } from "../../../ui/SubText";
import { NotFoundPage } from "../../../utils/notFounds/NotFoundPage";
import { useNoticeHistory } from "../hooks/useNoticeHistory";

export const NoticeDetailPage = () => {
  const { noticeId } = useParams();
  const { data, isPending } = useNoticeHistory();

  //에러처리
  if (noticeId === undefined || isNaN(Number(noticeId)))
    return <NotFoundPage />;
  if (isPending) return <LoadingIndicator isFullScreen={true} />;
  const notice = data?.find((item) => item.id === Number(noticeId));
  if (!notice) return <NotFoundPage />; //TODO: 못 찾기보다는 에러
  const time = dayjs(notice.createdAt).format("YYYY-MM-DD");

  return (
    <Column>
      <NavBar />
      <Layout>
        <MainText className="px-2 text-2xl">{notice.title}</MainText>
        <Row className="mt-4 justify-end">
          <Column>
            <SubText className="text-sm">작성일: {time}</SubText>
            <SubText className="text-sm">작성자: {notice.nickname}</SubText>
          </Column>
        </Row>
        <Divider className="mt-3 mb-3" />
        <MainText className="mt-5 px-2 whitespace-pre-line">
          {notice.content}
        </MainText>
      </Layout>
    </Column>
  );
};
