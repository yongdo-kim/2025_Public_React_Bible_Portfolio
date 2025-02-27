//창세기 1장 1절 + 카드모양

import { SlArrowRightCircle } from "react-icons/sl";
import { Link } from "react-router-dom";
import { ROUTES } from "../../_common/navigation/constants/routes";
import { Button } from "../../_common/ui/Button";
import { Card } from "../../_common/ui/Card";
import { Column } from "../../_common/ui/Column";
import { Grid } from "../../_common/ui/Grid";
import { MainText } from "../../_common/ui/MainText";
import { Row } from "../../_common/ui/Row";
import { SubText } from "../../_common/ui/SubText";
import { logEvent } from "../../_common/utils/analytics"; // GA4 이벤트 로깅 import
import useAnalytics from "../../_common/utils/hooks/useAnalytics";
import { useRandomVerse } from "../hooks/useRandomVerse";

export const VerseCard = () => {
  const { data: verse } = useRandomVerse();

  useAnalytics("verse_click", {
    bookId: verse?.bookId,
    chapterId: verse?.chapterId,
    verseId: verse?.verseId,
  });

  const handleClick = () => {
    logEvent("Verse", "Click", "Verse Card Clicked"); // 이벤트 로깅
  };

  return (
    <Link to={ROUTES.CONTENT_DETAIL(verse?.bookId.toString(), "1")}>
      <Grid className="md:grid-cols-2">
        {/* 이미지 카드 */}
        <Card className="mt-4 aspect-video w-full">
          <img
            src={verse?.imageUrlCompressed}
            alt="bookImage"
            className="aspect-auto transform object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Card>
        {/* 내용 */}
        <Column className="justify-center md:px-10">
          {/* 창세기 1장 1절*/}
          <Row className="mt-4 justify-start">
            <SubText className="pr-1 text-lg font-medium">
              {verse?.bookName}
            </SubText>
            <SubText className="pr-1 text-lg font-medium">
              {verse?.chapterId}장
            </SubText>
            <SubText className="pr-1 text-lg font-medium">
              {verse?.verseId}절
            </SubText>
          </Row>
          <MainText
            children={`「 ${verse?.content} 」`}
            className="mt-3 text-2xl md:text-2xl"
          />
          <Button className="mt-6 md:mt-11" onClick={handleClick}>
            <Row className="justify-between">
              <SubText className="text-lg text-slate-100 dark:text-slate-100">
                {verse?.bookName} {verse?.chapterId}장 {verse?.verseId}절
                보러가기
              </SubText>
              <SubText>
                <SlArrowRightCircle className="0 h-6 w-6 text-slate-100" />
              </SubText>
            </Row>
          </Button>
        </Column>
      </Grid>
    </Link>
  );
};
