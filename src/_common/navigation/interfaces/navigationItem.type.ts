import { IconType } from "react-icons";

export type NavigationItemType = {
  icon: React.ReactElement<IconType>;
  selectedIcon: React.ReactElement<IconType>;
  tab: string;
  path: string;
};
