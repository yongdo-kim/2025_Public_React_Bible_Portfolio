import { useNariGoogleLogin } from "../../../_common/auth/google/hooks/useGoogleLogin";
import { BorderBox } from "../../../_common/ui/BorderBox";
import { Button } from "../../../_common/ui/Button";
import { Column } from "../../../_common/ui/Column";
import { MainText } from "../../../_common/ui/MainText";
import { SubText } from "../../../_common/ui/SubText";
import useMe from "../../../me/hooks/useMe";
export const SettingLoginHeader = () => {
  const { data: user } = useMe();
  const { googleLogin } = useNariGoogleLogin();
  return (
    <BorderBox className="mb-10 rounded-2xl border px-6 py-4">
      <Column className="mb-5 items-start">
        <MainText className="mb-4 sm:text-xl">
          {user
            ? "원하는 구절을 찾고 즐겨찾기 해봐요!"
            : "로그인하고 마음에 드는 구절을 찾아볼까요?"}
        </MainText>
        <SubText>즐겨찾기 하면 차트를 확인할 수 있어요!</SubText>
      </Column>

      {!user && (
        <Button
          onClick={() => googleLogin()}
          className="w-full justify-center rounded-lg"
        >
          구글 로그인
        </Button>
      )}
    </BorderBox>
  );
};
