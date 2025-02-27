import { AiOutlineNotification } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";
import useMe from "../../../../me/hooks/useMe";
import { ROUTES } from "../../../navigation/constants/routes";
import { NavBar } from "../../../navigation/ui/HeaderNavigation";
import { Column } from "../../../ui/Column";
import { Divider } from "../../../ui/Divider";
import { ListTile } from "../../../ui/ListTile";
import { LoadingIndicator } from "../../../ui/LoadingIndicator";
import { MainText } from "../../../ui/MainText";
import { UserRoleEnum } from "../../../users/enum/userRole.enum";
import { useNoticeHistory } from "../hooks/useNoticeHistory";

const NoticeHistoryPage = () => {
  const { data, isPending } = useNoticeHistory();
  const { data: user } = useMe();
  if (isPending) return <LoadingIndicator isFullScreen={true} />;
  if (!data) return null;

  return (
    <Column>
      <NavBar
        children={
          user?.role == UserRoleEnum.Admin ? (
            <Link to={ROUTES.NOTICE.WRITE}>
              <MainText className="cursor-pointer text-xl dark:text-emerald-600">
                <GoPencil />
              </MainText>
            </Link>
          ) : null
        }
      />

      <ul>
        {data.map((item) => (
          <Column key={item.id}>
            <ListTile
              className="py-3"
              role="listitem"
              key={item.id}
              listType={{
                icon: <AiOutlineNotification className="text-emerald-600" />,
                title: item.title,
                path: ROUTES.NOTICE.DETAIL(item.id.toString()),
              }}
            />
            <Divider className="mt-1" />
          </Column>
        ))}
      </ul>
    </Column>
  );
};

export default NoticeHistoryPage;
