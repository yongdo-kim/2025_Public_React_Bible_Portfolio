import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RootLayout } from "./_common/ui/RootLayout.tsx";
import { initGA } from "./_common/utils/analytics"; // GA4 초기화 import
import { initSentry } from "./_common/utils/sentry"; // Sentry 설정 파일 import

import { GoogleOAuthProvider } from "@react-oauth/google";
import { initFirebase } from "./_common/utils/firebaseConfig.ts";
import App from "./App.tsx";
import "./index.css";

// Sentry 초기화
initSentry();
//Firebase 초기화
initFirebase();
initGA();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RootLayout>
          <App />
        </RootLayout>
      </GoogleOAuthProvider>
    </HelmetProvider>
  </StrictMode>,
);
