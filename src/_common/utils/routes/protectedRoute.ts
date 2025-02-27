import useMe from "../../../me/hooks/useMe";
import useNariNavigate from "../hooks/useNariNavigation";
import { COMMON_ROUTES } from "./routes";

interface RoleProtectedRouteProps {
  children: JSX.Element;
  userRole: string;
}

const RoleProtectedRoute = ({
  children,
  userRole,
}: RoleProtectedRouteProps) => {
  const { goReplace } = useNariNavigate();
  const { data: user } = useMe();

  if (userRole.toLowerCase() !== user?.role.toLowerCase()) {
    goReplace(COMMON_ROUTES.HOME);
    return null;
  }

  return children;
};

export default RoleProtectedRoute;
