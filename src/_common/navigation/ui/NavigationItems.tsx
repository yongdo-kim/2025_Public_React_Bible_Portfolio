import {
  IoBook,
  IoBookOutline,
  IoHome,
  IoHomeOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { ROUTES } from "../constants/routes";
import { NavBarEnum } from "../enum/NavBar.enum";
import { NavigationItemType } from "../interfaces/navigationItem.type";

export const NavItems: NavigationItemType[] = [
  {
    icon: <IoHomeOutline />,
    selectedIcon: <IoHome />,
    tab: NavBarEnum.Home,
    path: `${ROUTES.HOME}`,
  },
  {
    icon: <IoBookOutline />,
    selectedIcon: <IoBook />,
    tab: NavBarEnum.Bible,
    path: `${ROUTES.BIBLE}`,
  },
  {
    icon: <IoSettingsOutline />,
    selectedIcon: <IoSettings />,
    tab: NavBarEnum.Settings,
    path: `${ROUTES.SETTING}`,
  },
];
