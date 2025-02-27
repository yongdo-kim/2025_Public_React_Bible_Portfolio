import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID); // GA4 측정 ID
};

export const logPageView = (page: string) => {
  ReactGA.send({ hitType: "pageview", page });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({ category, action, label });
};
