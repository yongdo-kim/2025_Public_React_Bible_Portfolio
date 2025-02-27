//어떤 웹이든 항상 가지고 있는 구조는 여기로 모이기로 하자.
export const COMMON_ROUTES = {
  HOME: "/",
  //주로 설정탭 쪽이 공통적으로 사용되는 것 같다. 
  SETTING: "/setting",
  NOTICE: {
    HISTORY: "/notice-history",
    WRITE: "/notice-write",
    DETAIL: (noticeId: string) => `/notice-history/${noticeId}`,
  },
  NOT_FOUND: "/not-found",
  VERSION: "/version",
  LICENSE: "/license",
  FEEDBACK: "/feedback",
};
