import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavBarEnum } from "../../navigation/enum/NavBar.enum";
import useNavigationStore from "../../navigation/store/navbarStore";

//url 이동을 감지하여, navbar 변경
//TODO : 이건 바텀네비게이션과 같이 하는것 같은데,
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
    // 추가적인 경로에 대한 조건을 여기에 추가할 수 있습니다.
  }, [location.pathname, setCurrentTab]);
};

export default useCurrentTab;
