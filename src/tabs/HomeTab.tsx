import { NavBar } from "../_common/navigation/ui/HeaderNavigation";
import { Column } from "../_common/ui/Column";
import { Divider } from "../_common/ui/Divider";
import { Layout } from "../_common/ui/Layout";
import { MainText } from "../_common/ui/MainText";
import { SizeBox } from "../_common/ui/SizeBox";
import { SubText } from "../_common/ui/SubText";
import SEO from "../_common/utils/seo";
import { BookCards } from "../books/components/BookCards";
import { VerseCard } from "../contents/components/VerseCard";

import useMe from "../me/hooks/useMe";
import useCurrentTab from "../shared/hooks/useCurrentTab";

export const HomeTab = () => {
  const { data: user } = useMe();
  useCurrentTab();

  return (
    <>
      <SEO
        title="하루 성경"
        description="하루 한 장, 말씀과 함께하는 은혜로운 시간. 묵상과 적용을 통해 삶에 스며드는 성경의 지혜를 경험하세요"
      />
      <NavBar />

      <Layout>
        <Column>
          {user && (
            <MainText className="mb-4 text-2xl font-semibold">
              {user.name}님 어서오세요! 😊
            </MainText>
          )}
          <MainText className="text-2xl font-semibold">하루 성경</MainText>
          <SubText className="mt-2 text-lg">
            나의 마음을 채워줄 말씀의 은혜를 찾아볼까요?
          </SubText>

          <VerseCard />
          <Divider className="mt-8" />
          {/* TODO: 광고 영역 추가하기 */}
          <MainText className="mt-8 text-2xl font-semibold">
            오늘의 말씀
          </MainText>
          <SubText className="mt-2 text-lg">
            성경에서 당신을 위한 메시지를 찾아보세요.
          </SubText>
          <BookCards />
          <SizeBox className="h-16 w-4" />
        </Column>
      </Layout>
    </>
  );
};
