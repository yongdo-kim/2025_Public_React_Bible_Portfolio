import { create } from "zustand";

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeState>((set) => {
  const initialDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  // 다크 모드가 활성화된 경우, 클래스 추가
  if (initialDarkMode) {
    document.documentElement.classList.add("dark");
  }

  return {
    isDarkMode: initialDarkMode,
    toggleDarkMode: () =>
      set((state) => {
        const newMode = !state.isDarkMode;
        if (newMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        return { isDarkMode: newMode };
      }),
  };
});
