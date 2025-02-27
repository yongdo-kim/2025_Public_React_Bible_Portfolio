import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      refetchInterval: 1000 * 60 * 5,
      throwOnError(error, query) {
        if (import.meta.env.VITE_ENV == "development") {
          console.log("ERROR ", error, query);
        }

        return false;
      },
    },
  },
});
