// Pages

import { FeedBackPage } from "./_common/setting/feedbacks/FeedBackPage";
import { LicensePage } from "./_common/setting/license/LicensePage";
import { NoticeDetailPage } from "./_common/setting/notices/pages/NoticeDetailPage";
import NoticeHistoryPage from "./_common/setting/notices/pages/NoticeHistoryPage";
import { NoticeWritePage } from "./_common/setting/notices/pages/NoticeWritePage";
import { VersionPage } from "./_common/setting/version/VersionPage";
import { UserRoleEnum } from "./_common/users/enum/userRole.enum";
import { NotFoundPage } from "./_common/utils/notFounds/NotFoundPage";
import RoleProtectedRoute from "./_common/utils/routes/protectedRoute";
import { MyBookmarkListPage } from "./bookmark/pages/MyBookmarks";
import { ContentDetailPage } from "./contents/pages/ContentDetailPage";

import { Outlet } from "react-router-dom";

import { ROUTES } from "./_common/navigation/constants/routes";
import { BottomNavigation } from "./_common/navigation/ui/BottomNavigation";
import PrivacyPolicyPage from "./_common/setting/privacyPolicy/privacyPolicyPage";
import { Stack } from "./_common/ui/Stack";
import { BibleTab } from "./tabs/BibleTab";
import { HomeTab } from "./tabs/HomeTab";
import { SettingTab } from "./tabs/setting/SettingTab";

export const routes = [
  {
    path: "/",
    //공통으로 실행, outlet에 route의 데이터가 들어간다.
    element: (
      <Stack>
        <Outlet />
        <BottomNavigation />
      </Stack>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomeTab />,
        //loader 캐싱되지 않아 느린 문제가 발생, 이미지가 많은 곳은 애매
      },
      { path: ROUTES.BIBLE, element: <BibleTab /> },
      { path: ROUTES.SETTING, element: <SettingTab /> },
      { path: ROUTES.VERSION, element: <VersionPage /> },
      { path: ROUTES.FEEDBACK, element: <FeedBackPage /> },
      { path: ROUTES.NOTICE.HISTORY, element: <NoticeHistoryPage /> },
      { path: ROUTES.LICENSE, element: <LicensePage /> },
      { path: ROUTES.PRIVACY_POLICY, element: <PrivacyPolicyPage /> },
      {
        path: ROUTES.CONTENT_DETAIL(":bookId", ":chapterId"),
        element: <ContentDetailPage />,
        errorElement: <NotFoundPage />,
      },
      { path: ROUTES.MY_BOOKMARKS, element: <MyBookmarkListPage /> },
      {
        path: ROUTES.NOTICE.DETAIL(":noticeId"),
        element: <NoticeDetailPage />,
      },
      {
        path: ROUTES.NOTICE.WRITE,
        element: (
          <RoleProtectedRoute userRole={UserRoleEnum.Admin}>
            <NoticeWritePage />
          </RoleProtectedRoute>
        ),
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
