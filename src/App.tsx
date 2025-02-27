import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter } from "react-router-dom";

import { queryClient } from "./queryClient";
// Start of Selection
import { ErrorBoundary } from "@sentry/react";
import { RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./_common/utils/notFounds/NotFoundPage";
import { routes } from "./routes";
const router = createBrowserRouter(routes);

const App = () => {
  return (
    <ErrorBoundary fallback={() => <NotFoundPage />}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster position="bottom-center" reverseOrder={true} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
