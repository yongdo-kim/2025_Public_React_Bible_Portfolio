import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { Column } from "../../ui/Column";
import { MainText } from "../../ui/MainText";
import useNariNavigate from "../../utils/hooks/useNariNavigation";
import useNavigationStore from "../store/navbarStore";
import { NavItems } from "./NavigationItems";
import { logEvent } from "../../utils/analytics";
export const BottomNavigation = () => {
  return (
    <nav className="bg-lightGray fixed right-0 bottom-0 left-0 mx-auto h-16 max-w-screen-lg min-w-max border-t border-gray-200 bg-gray-100 shadow-md lg:hidden dark:border-gray-700 dark:bg-gray-950">
      <ul className="flex flex-row p-2">
        {NavItems.map((item) => (
          <BottomNavigationItem
            key={item.path}
            icon={item.icon}
            selectedIcon={item.selectedIcon}
            tab={item.tab}
            path={item.path}
          />
        ))}
      </ul>
    </nav>
  );
};

const BottomNavigationItem = ({
  icon,
  selectedIcon,
  tab,
  path,
}: {
  icon: React.ReactElement<IconType>;
  selectedIcon: React.ReactElement<IconType>;
  tab: string;
  path: string;
}) => {
  const { goReplace } = useNariNavigate();
  const currentTab = useNavigationStore((state) => state.currentTab);
  const setCurrentTab = useNavigationStore((state) => state.setCurrentTab);
  const isSelected = currentTab === tab;
  const setIcon = isSelected ? selectedIcon : icon;

  return (
    <li className="flex flex-1 flex-col items-center justify-center text-center text-gray-600">
      <Link
        to={path}
        className="flex flex-col items-center"
        onClick={() => {
          logEvent("BottomNavigation", "click", tab);
          setCurrentTab(tab);
          goReplace(path);
        }}
      >
        <Column className="group items-center justify-center">
          <MainText
            className={`mb-0.5 text-xl group-hover:text-emerald-700 ${isSelected ? "" : "text-gray-500 dark:text-gray-300"}`}
          >
            {setIcon}
          </MainText>

          <MainText
            className={`mb-0.5 group-hover:text-emerald-700 ${
              isSelected ? "" : "text-gray-500 dark:text-slate-300"
            }`}
          >
            {tab}
          </MainText>
        </Column>
      </Link>
    </li>
  );
};
