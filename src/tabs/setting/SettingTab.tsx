import { AiOutlineExclamationCircle, AiOutlineMail } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbLicense } from "react-icons/tb";
import packageJson from "../../../package.json";

import BookmarkPieChart from "../../bookmark/components/BookmarkChart";

import { MdOutlinePrivacyTip } from "react-icons/md";
import { GoogleButton } from "../../_common/auth/google/components/GoogleButton";
import { GoogleAuthEnum } from "../../_common/auth/google/enums/googleAuth.enum";
import { ROUTES } from "../../_common/navigation/constants/routes";
import { NavBar } from "../../_common/navigation/ui/HeaderNavigation";
import { Column } from "../../_common/ui/Column";
import { Divider } from "../../_common/ui/Divider";
import { Grid } from "../../_common/ui/Grid";
import { Layout } from "../../_common/ui/Layout";
import { ListTile } from "../../_common/ui/ListTile";
import { Row } from "../../_common/ui/Row";
import { SizeBox } from "../../_common/ui/SizeBox";
import { SubText } from "../../_common/ui/SubText";
import useAnalytics from "../../_common/utils/hooks/useAnalytics";
import useMe from "../../me/hooks/useMe";
import useCurrentTab from "../../shared/hooks/useCurrentTab";
import { NoProfileArea } from "./components/NoProfileArea";
import { ProfileArea } from "./components/ProfileArea";
import { SettingLoginHeader } from "./components/SettingLoginHeader";

export const SettingTab = () => {
  useCurrentTab();
  const { data: user, isPending } = useMe();
  useAnalytics("page_view", { page_title: "SettingTab" });

  return (
    <>
      <NavBar />
      <Layout>
        <Column>
          <Grid className="mt-8 sm:grid-cols-[1fr_2fr]">
            <Column className="mb-3 items-center">
              {user ? (
                <ProfileArea user={user} />
              ) : (
                <NoProfileArea isPending={isPending} />
              )}
              <AccountArea />
              <SizeBox className="h-4" />
              <ServiceArea />
            </Column>
            <ChartArea />
          </Grid>
        </Column>
      </Layout>
    </>
  );
};

const ChartArea = () => {
  return (
    <Column>
      <SubText className="mb-3 px-5">즐겨찾기 안내 </SubText>
      <SettingLoginHeader />
      <BookmarkPieChart />
    </Column>
  );
};

const AccountArea = () => {
  const { data: user } = useMe();

  return (
    <Column className="items mt-6 w-full justify-center">
      <SubText className="mb-3 px-5">계정 안내 </SubText>

      {user ? (
        <Row>
          <GoogleButton type={GoogleAuthEnum.Logout} />
        </Row>
      ) : (
        <GoogleButton type={GoogleAuthEnum.Login} />
      )}
      <Divider className={`sm:hidden`} />
    </Column>
  );
};

const ServiceArea = () => {
  const version = packageJson.version;

  return (
    <Column className="w-full justify-center">
      <SubText className="mb-4 px-5">서비스 안내 </SubText>
      <Column className="gap-y-3">
        <ListTile
          listType={{
            icon: <AiOutlineExclamationCircle className="h-5 w-5" />,
            title: "공지사항",
            path: ROUTES.NOTICE.HISTORY,
          }}
        />
        <Divider />
        <ListTile
          listType={{
            icon: <AiOutlineMail className="h-5 w-5" />,
            title: "개선사항 제안하기",
            path: ROUTES.FEEDBACK,
          }}
        />
        <Divider />
        <ListTile
          listType={{
            icon: <FaRegCircleCheck className="h-5 w-5" />,
            title: `버전 정보 (v${version})`,
            path: ROUTES.VERSION,
          }}
        />
        <Divider />
        <ListTile
          listType={{
            icon: <TbLicense className="h-5 w-5" />,
            title: "라이센스",
            path: ROUTES.LICENSE,
          }}
        />
        <Divider />
        <ListTile
          listType={{
            icon: <MdOutlinePrivacyTip className="h-5 w-5" />,
            title: "개인정보처리방침",
            path: ROUTES.PRIVACY_POLICY,
          }}
        />
        <Divider />
      </Column>
    </Column>
  );
};
