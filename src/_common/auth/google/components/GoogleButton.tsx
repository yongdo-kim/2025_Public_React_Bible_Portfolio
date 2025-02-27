import { FcGoogle } from "react-icons/fc";
import { MainText } from "../../../ui/MainText";
import { Row } from "../../../ui/Row";
import { GoogleAuthEnum } from "../enums/googleAuth.enum";
import { useNariGoogleLogin } from "../hooks/useGoogleLogin";
import useGoogleLogout from "../hooks/useGoogleLogout";

export const GoogleButton = ({
  type,
  className,
}: {
  type: GoogleAuthEnum;
  className?: string;
}) => {
  const { logout } = useGoogleLogout();
  const { googleLogin } = useNariGoogleLogin();

  const handleClick = () => {
    if (type === GoogleAuthEnum.Login) {
      googleLogin();
    } else {
      logout.mutate();
    }
  };

  return (
    <button onClick={handleClick} className={`${className} cursor-pointer`}>
      <Row className="items-center gap-x-3 px-10 py-2">
        <MainText className="text-base">
          <FcGoogle />
        </MainText>

        <MainText className="text-base">{type}</MainText>
      </Row>
    </button>
  );
};
