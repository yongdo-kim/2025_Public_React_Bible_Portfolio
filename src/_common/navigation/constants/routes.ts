export const ROUTES = {
  HOME: "/",
  BIBLE: "/bible",
  SETTING: "/setting",
  CONTENT_DETAIL: (book?: string, chapter?: string) =>
    `/contents/books/${book}/chapters/${chapter}`,
  NOTICE: {
    HISTORY: "/notice-history",
    WRITE: "/notice-write",
    DETAIL: (noticeId: string) => `/notice-history/${noticeId}`,
  },
  // BookMark
  MY_BOOKMARKS: "/my-bookmarkpage",
  // General
  NOT_FOUND: "/not-found",
  VERSION: "/version",
  LICENSE: "/license",
  FEEDBACK: "/feedback",
  PRIVACY_POLICY: "/privacy-policy",
};
