// import { LoaderFunctionArgs, Outlet } from "react-router-dom";
// import { ROUTES } from "../../_common/navigation/constants/routes";
// import { MyBookmarkListPage } from "../../bookmark/pages/MyBookmarks";
// import { ContentDetailPage } from "../../contents/pages/ContentDetailPage";
// import { BibleTab } from "../../tabs/BibleTab";
// import { HomeTab } from "../../tabs/HomeTab";
// import { SettingTab } from "../../tabs/setting/SettingTab";
// import { FeedBackPage } from "../setting/feedbacks/FeedBackPage";
// import { LicensePage } from "../setting/license/LicensePage";
// import { NoticeDetailPage } from "../setting/notices/pages/NoticeDetailPage";
// import NoticeHistoryPage from "../setting/notices/pages/NoticeHistoryPage";
// import { NoticeWritePage } from "../setting/notices/pages/NoticeWritePage";
// import { VersionPage } from "../setting/version/VersionPage";
// import { Stack } from "../ui/Stack";
// import { UserRoleEnum } from "../users/enum/userRole.enum";
// import { getHttp } from "../utils/https/https";
// import { NotFoundPage } from "../utils/notFounds/NotFoundPage";
// import RoleProtectedRoute from "../utils/routes/protectedRoute";
// import { BottomNavigation } from "./ui/BottomNavigation";

// export const routes = [
//   {
//     //공통으로 실행, outlet에 route의 데이터가 들어간다.
//     element: (
//       <Stack>
//         <Outlet />
//         <BottomNavigation />
//       </Stack>
//     ),
//     children: [
//       { path: ROUTES.HOME, element: <HomeTab /> },
//       { path: ROUTES.BIBLE, element: <BibleTab /> },
//       { path: ROUTES.SETTING, element: <SettingTab /> },
//       { path: ROUTES.VERSION, element: <VersionPage /> },
//       { path: ROUTES.FEEDBACK, element: <FeedBackPage /> },
//       { path: ROUTES.NOTICE.HISTORY, element: <NoticeHistoryPage /> },
//       { path: ROUTES.LICENSE, element: <LicensePage /> },
//       {
//         path: ROUTES.CONTENT_DETAIL(":bookId", ":chapterId"),
//         element: <ContentDetailPage />,
//         errorElement: <NotFoundPage />,
//         loader: ({ params }: LoaderFunctionArgs) => {
//           const { bookId, chapterId } = params;
//           return getHttp({
//             url: `/contents/books/${bookId}/chapters/${chapterId}`,
//           }).then((response) => response.data);
//         },
//       },
//       { path: ROUTES.MY_BOOKMARKS, element: <MyBookmarkListPage /> },
//       {
//         path: ROUTES.NOTICE.DETAIL(":noticeId"),
//         element: <NoticeDetailPage />,
//       },
//       {
//         path: ROUTES.NOTICE.WRITE,
//         element: (
//           <RoleProtectedRoute userRole={UserRoleEnum.Admin}>
//             <NoticeWritePage />
//           </RoleProtectedRoute>
//         ),
//       },
//       { path: "*", element: <NotFoundPage /> },
//     ],
//   },
// ];
