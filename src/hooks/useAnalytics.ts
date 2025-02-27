import { useEffect } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";

const useAnalytics = (eventName: string, params: object) => {
  useEffect(() => {
    const analytics = getAnalytics(); // Firebase Analytics 인스턴스 가져오기
    logEvent(analytics, eventName, params); // 이벤트 로깅
  }, [eventName, params]);
};

export default useAnalytics; 