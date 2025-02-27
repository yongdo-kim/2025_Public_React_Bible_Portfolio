import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { BorderBox } from "../../../_common/ui/BorderBox";
import { Column } from "../../../_common/ui/Column";
import { MainText } from "../../../_common/ui/MainText";
import { Row } from "../../../_common/ui/Row";
import { ROUTES } from "../../../_common/navigation/constants/routes";

//즐겨찾기 진행율
export const UserBibleInfo = ({
  count,
  title,
  iconType,
  isLogin,
}: {
  count: number;
  title: string;
  iconType: React.ReactElement<IconType>;
  isLogin?: boolean;
}) => {
  return !isLogin ? (
    <BorderBox className={`mx-2 my-4 w-32 px-6 py-4`}>
      <Column className="items-center gap-y-1">
        <Row className="items-center gap-x-2">
          {iconType}
          <MainText>{count}</MainText>
        </Row>
        <MainText>{title}</MainText>
      </Column>
    </BorderBox>
  ) : (
    <Link to={ROUTES.MY_BOOKMARKS}>
      <BorderBox className={`mx-2 my-4 w-32 px-6 py-4`}>
        <Column className="items-center gap-y-1">
          <Row className="items-center gap-x-2">
            {iconType}
            <MainText>{count}</MainText>
          </Row>
          <MainText>{title}</MainText>
        </Column>
      </BorderBox>
    </Link>
  );
};
