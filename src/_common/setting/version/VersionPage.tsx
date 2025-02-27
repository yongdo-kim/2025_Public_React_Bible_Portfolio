import packageJson from "../../../../package.json";
import { NavBar } from "../../navigation/ui/HeaderNavigation";
import { Button } from "../../ui/Button";
import { Column } from "../../ui/Column";
import { LoadingIndicator } from "../../ui/LoadingIndicator";
import { MainText } from "../../ui/MainText";
import { SubText } from "../../ui/SubText";
import useNariNavigate from "../../utils/hooks/useNariNavigation";
import { useVersion } from "./useVersion";

export const VersionPage = () => {
  //TODO : 버전 API 가져와서 현재 버전인지 아닌지 체크하기.
  //아닌 경우에는 어쩔껀데
  const { goBack } = useNariNavigate();
  const { isLoading, data } = useVersion();
  if (isLoading) return <LoadingIndicator isFullScreen={true} />;

  let serverVersion = data["version"];
  let clientVersion = packageJson.version;

  // 버전 비교 함수
  const compareVersions = (v1: string, v2: string) => {
    const v1Parts = v1.split(".").map(Number);
    const v2Parts = v2.split(".").map(Number);

    for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
      const v1Part = v1Parts[i] || 0; // 기본값 0
      const v2Part = v2Parts[i] || 0; // 기본값 0
      if (v1Part > v2Part) return 1; // v1이 더 큼
      if (v1Part < v2Part) return -1; // v2가 더 큼
    }
    return 0; // 두 버전이 같음
  };

  const versionComparison = compareVersions(serverVersion, clientVersion);

  return (
    <Column className="min-h-screen">
      <NavBar />
      <Column className="items-center justify-center py-44">
        <MainText className="mt-4 text-2xl">현재 버전 정보는 </MainText>
        <SubText className="mt-2 text-2xl">
          {packageJson.version} 입니다
        </SubText>

        <SubText className="mt-3 text-xl">
          {versionComparison == 1 ? "업데이트가 필요해요!" : "최신버전이에요"}
        </SubText>
        <SubText className="mt-1 text-lg text-emerald-600 dark:text-emerald-400">
          최신버전 {serverVersion}
        </SubText>

        <Button className="mt-10" onClick={goBack}>
          되돌아가기
        </Button>
      </Column>
    </Column>
  );
};
