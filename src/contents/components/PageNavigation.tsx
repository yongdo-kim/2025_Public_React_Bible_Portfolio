import toast from "react-hot-toast";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { Button } from "../../_common/ui/Button";
import { Layout } from "../../_common/ui/Layout";
import { MainText } from "../../_common/ui/MainText";
import { Row } from "../../_common/ui/Row";

import useNariNavigate from "../../_common/utils/hooks/useNariNavigation";
import { usePrefetchVerses } from "../../contents/hooks/usePrefetchVerses";
import { bookToChapterMapping } from "../../shared/utils/bibleLimitNumber";

export const PageNavigation = () => {
  const { goReplace } = useNariNavigate();
  const { bookId, chapterId } = useParams<{
    bookId: string;
    chapterId: string;
  }>();
  //변환
  const bookIdNumber = Number(bookId);
  const chapterIdNumber = Number(chapterId);
  // 이전/다음 페이지 프리페칭 훅
  const prefetchPrevious = usePrefetchVerses(
    chapterIdNumber !== 1 ? bookIdNumber : bookIdNumber - 1,
  );
  const prefetchNext = usePrefetchVerses(
    chapterIdNumber === bookToChapterMapping.get(bookIdNumber)
      ? bookIdNumber + 1
      : bookIdNumber,
  );

  const goPreviousPage = () => {
    //맨 처음인 경우
    if (bookIdNumber === 1 && chapterIdNumber === 1) {
      return toast("여기가 첫 장이에요!", {
        icon: "📖✨ ",
      });
    }

    //현 챕터에서 뒤로 갈 수 있는 경우
    if (chapterIdNumber !== 1) {
      goReplace(
        `/contents/books/${bookIdNumber}/chapters/${chapterIdNumber - 1}`,
      );
    } else {
      //현 챕터가 1장인 경우 -> 이전 북으로 이동
      const hasBookId = bookToChapterMapping.has(bookIdNumber - 1);
      if (hasBookId) {
        const previousBookIdNumber = bookIdNumber - 1;
        const previousChapterIdNumber =
          bookToChapterMapping.get(previousBookIdNumber);
        goReplace(
          `/contents/books/${previousBookIdNumber}/chapters/${previousChapterIdNumber}`,
        );
        return toast("새로운 장으로 왔어요!", {
          icon: "📖✨ ",
        });
      }
    }
  };

  const goNextPage = () => {
    const maxChapterIdNumber = bookToChapterMapping.get(bookIdNumber);
    //현재 챕터가 마지막 챕터인지 확인
    if (chapterIdNumber === maxChapterIdNumber) {
      //앞으로 가려고 할 경우 bookId가 존재하는지 확인
      const hasBookId = bookToChapterMapping.has(bookIdNumber + 1);
      if (hasBookId) {
        const nextBookIdNumber = bookIdNumber + 1;
        goReplace(`/contents/books/${nextBookIdNumber}/chapters/1`);
        return toast("새로운 장으로 왔어요!", {
          icon: "📖✨ ",
        });
      } else {
        return toast("여기가 마지막장이에요!", {
          icon: "📖✨ ",
        });
      }
    } else {
      //다음 장으로 이동
      const nextChapterIdNumber = chapterIdNumber + 1;
      goReplace(
        `/contents/books/${bookIdNumber}/chapters/${nextChapterIdNumber}`,
      );
    }
  };

  return (
    <Layout>
      <Row className="justify-between">
        <Button onClick={goPreviousPage} onMouseEnter={prefetchPrevious}>
          <Row className="items-center justify-center">
            <SlArrowLeftCircle className="top-8 mr-4 h-6 w-6 text-slate-100" />
            <MainText className="text-lg text-slate-100">이전장</MainText>
          </Row>
        </Button>
        <Button onClick={goNextPage} onMouseEnter={prefetchNext}>
          <Row className="items-center justify-center">
            <MainText className="mr-4 text-lg text-slate-100">다음장</MainText>
            <SlArrowRightCircle className="top-8 h-6 w-6 text-slate-100" />
          </Row>
        </Button>
      </Row>
    </Layout>
  );
};
