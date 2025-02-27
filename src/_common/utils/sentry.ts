import * as Sentry from "@sentry/react";
import { useEffect } from "react";
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
export const initSentry = () => {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      Sentry.reactRouterV6BrowserTracingIntegration({
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
      Sentry.replayIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0, // 100%의 트랜잭션 캡처
    tracePropagationTargets: [
      "localhost",
      /^https:\/\/kingnaristudio\.store\/api/,
    ],
    // Session Replay
    replaysSessionSampleRate: 0.1, // 세션 리플레이 샘플 비율
    replaysOnErrorSampleRate: 1.0, // 오류 발생 시 세션 리플레이 샘플 비율
  });
};
