import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavBarEnum } from "../../_common/navigation/enum/NavBar.enum";
import useNavigationStore from "../../_common/navigation/store/navbarStore";

//url 이동을 감지하여, navbar 변경
const useCurrentTab = () => {
  const location = useLocation();
  const { setCurrentTab } = useNavigationStore();

  useEffect(() => {
    if (location.pathname.startsWith("/bible")) {
      setCurrentTab(NavBarEnum.Bible);
    } else if (location.pathname.startsWith("/setting")) {
      setCurrentTab(NavBarEnum.Settings);
    } else if (location.pathname.startsWith("/")) {
      setCurrentTab(NavBarEnum.Home);
    }
  }, [location.pathname, setCurrentTab]);
};

export default useCurrentTab;
