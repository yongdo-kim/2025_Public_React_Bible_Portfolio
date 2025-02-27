import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";

const useAnalytics = (eventName: string, params: object) => {
  useEffect(() => {
    const analytics = getAnalytics();
    logEvent(analytics, eventName, params);
  }, [eventName, params]);
};

export default useAnalytics;
