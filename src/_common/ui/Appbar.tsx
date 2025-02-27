import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";

import useMe from "../../me/hooks/useMe";
import { useNariGoogleLogin } from "../auth/google/hooks/useGoogleLogin";
import { ROUTES } from "../navigation/constants/routes";
import { NavigationItemType } from "../navigation/interfaces/navigationItem.type";
import useNavigationStore from "../navigation/store/navbarStore";
import { NavItems } from "../navigation/ui/NavigationItems";
import { DarkMode } from "../setting/darkmode/DarkMode";
import useNariNavigate from "../utils/hooks/useNariNavigation";
import { Chip } from "./Chip";
import { Column } from "./Column";
import { Divider } from "./Divider";
import { Logo } from "./Logo";
import { MainText } from "./MainText";
import { Row } from "./Row";

export const NavBar = ({ children }: { children?: React.ReactNode }) => {
  const isWeb = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <Column className="sticky top-0 z-10 bg-slate-50 dark:bg-gray-950">
      {isWeb ? <DesktopNavBar /> : <MobileNavBar children={children} />}
      <Divider />
    </Column>
  );
};

const MobileNavBar = ({ children }: { children: React.ReactNode }) => {
  const { goBack } = useNariNavigate();
  const { googleLogin } = useNariGoogleLogin();
  const { data: user } = useMe();
  const location = useLocation();
  const hiddenPaths = [ROUTES.HOME, ROUTES.BIBLE, ROUTES.SETTING];
  const canBack = !hiddenPaths.includes(location.pathname);

  return (
    <Column className="pt-2 pb-2">
      <Row className="h-12 items-center justify-between px-4">
        <>
          <Row className="items-center gap-x-3">
            <MainText
              className={`text-2xl font-semibold ${canBack ? "" : "hidden"} `}
            >
              <IoIosArrowBack onClick={goBack} className="cursor-pointer" />
            </MainText>
            <Logo />
          </Row>
          <Row className="items-center gap-x-4">
            {children}
            {!user && (
              <Chip onClick={() => googleLogin()}>
                <Row className="items-center gap-x-1">
                  <MainText className="text-base">
                    <FcGoogle />
                  </MainText>
                  <MainText>로그인</MainText>
                </Row>
              </Chip>
            )}
            <DarkMode />
          </Row>
        </>
      </Row>
    </Column>
  );
};

const DesktopNavBar = () => {
  const { data: user } = useMe();
  const { googleLogin } = useNariGoogleLogin();
  return (
    <Column className="border pt-2 pb-2">
      <Row className="h-12 items-center justify-between px-8">
        <>
          <Row>
            <Logo />
            <Row className="w-full pl-4">
              {NavItems.map((item) => (
                <DesktopMenuItem type={item} />
              ))}
            </Row>
          </Row>
          <Row className="items-center gap-x-4">
            {!user && (
              <Chip onClick={() => googleLogin()}>
                <Row className="items-center gap-x-1">
                  <MainText className="text-base">
                    <FcGoogle />
                  </MainText>
                  <MainText>로그인</MainText>
                </Row>
              </Chip>
            )}
            <DarkMode />
          </Row>
        </>
      </Row>
    </Column>
  );
};

const DesktopMenuItem = ({ type }: { type: NavigationItemType }) => {
  const { goReplace } = useNariNavigate();
  const currentTab = useNavigationStore((state) => state.currentTab);
  const setCurrentTab = useNavigationStore((state) => state.setCurrentTab);
  const isSelected = currentTab === type.tab;

  return (
    <Link
      className={`mx-1 rounded-md px-6 py-2 duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700`}
      to={type.path}
      onClick={() => {
        goReplace(type.path);
        setCurrentTab(type.tab);
      }}
    >
      <MainText
        className={`${isSelected ? "font-medium text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"} text-xl`}
      >
        {type.tab}
      </MainText>
    </Link>
  );
};
