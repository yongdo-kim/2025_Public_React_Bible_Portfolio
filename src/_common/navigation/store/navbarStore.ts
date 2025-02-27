import { create } from "zustand";
import { NavBarEnum } from "../enum/NavBar.enum";

type NavigationState = {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
};

const useNavigationStore = create<NavigationState>((set) => ({
  currentTab: NavBarEnum.Home, // 초기값
  setCurrentTab: (tab) => set({ currentTab: tab }),
}));

export default useNavigationStore;
