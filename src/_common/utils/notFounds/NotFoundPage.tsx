import { NavBar } from "../../navigation/ui/HeaderNavigation";
import { Button } from "../../ui/Button";
import { Column } from "../../ui/Column";
import { MainText } from "../../ui/MainText";
import { SubText } from "../../ui/SubText";
import useNariNavigate from "../hooks/useNariNavigation";

export const NotFoundPage = ({ error }: { error?: string }) => {
  const { goBack } = useNariNavigate();
  return (
    <Column>
      <NavBar />
      <Column className="items-center justify-center py-44">
        <MainText className="text-6xl font-bold">404</MainText>
        <MainText className="mt-4 text-3xl">페이지를 찾을 수 없어요.</MainText>
        <MainText className="mt-4 text-2xl">
          요청하신 페이지가 존재하지 않거나.
        </MainText>

        <MainText className="mt-1 text-2xl text-slate-600">
          이동되었을 수 있어요.
        </MainText>
        <SubText>{error}</SubText>

        <Button className="mt-10" onClick={goBack}>
          되돌아가기
        </Button>
      </Column>
    </Column>
  );
};
