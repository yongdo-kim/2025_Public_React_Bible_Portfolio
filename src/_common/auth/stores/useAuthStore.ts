import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  hasAccessToken: boolean;
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  hasAccessToken: false,
  setAccessToken: (accessToken) => {
    set({ accessToken: accessToken });
  },
  clearAccessToken: () => {
    set({ accessToken: null });
  },
  setHasAccessToken: (hasAccessToken: boolean) => {
    set({ hasAccessToken: hasAccessToken });
  },
}));
