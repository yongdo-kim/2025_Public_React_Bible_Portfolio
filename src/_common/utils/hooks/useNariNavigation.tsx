import { useNavigate } from "react-router-dom";

const useNariNavigate = () => {
  const canBack = window.history.length > 1;
  const navigate = useNavigate();

  // 이동 및 페이지 대체 이동
  const navigateTo = (path: string, replace: boolean = false) => {
    navigate(path, { replace });
    if (replace) {
      window.scrollTo(0, 0);
    }
  };

  // 뒤로 이동
  const goBack = () => {
    if (canBack) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return {
    goTo: (path: string) => navigateTo(path),
    goBack,
    goReplace: (path: string) => navigateTo(path, true),
    canBack,
  };
};

export default useNariNavigate;
