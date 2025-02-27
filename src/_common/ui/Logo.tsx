import React from "react";
import { Link } from "react-router-dom";
import { NavBarEnum } from "../navigation/enum/NavBar.enum";
import useNavigationStore from "../navigation/store/navbarStore";
import useNariNavigate from "../utils/hooks/useNariNavigation";
import { MainText } from "./MainText";

export const Logo = () => {
  const { goReplace } = useNariNavigate();
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault(); // 기본 링크 동작 방지
    setCurrentTab(NavBarEnum.Home);
    goReplace("/"); // 페이지를 대체하여 이동
  };
  const setCurrentTab = useNavigationStore((state) => state.setCurrentTab);

  return (
    <Link
      to={"/"}
      onClick={handleClick}
      className="flex items-center rounded-full border-2 border-emerald-600 px-4 py-1 dark:border-emerald-600"
    >
      <MainText className="font-medium">BIBLE</MainText>
    </Link>
  );
};
