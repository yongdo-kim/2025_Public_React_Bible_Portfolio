import { create } from "zustand";

interface UserState {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  accessToken: null,
  setAccessToken: (accessToken) => {
    set({ accessToken: accessToken });
  },
  clearAccessToken: () => {
    set({ accessToken: null });
  },
}));
