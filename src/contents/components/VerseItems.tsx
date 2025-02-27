import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Column } from "../../_common/ui/Column";
import { MainText } from "../../_common/ui/MainText";
import { Row } from "../../_common/ui/Row";
import { SubText } from "../../_common/ui/SubText";
import { useCreateBookmark } from "../../bookmark/hooks/useCreateBookmark";
import { useDeleteBookmark } from "../../bookmark/hooks/useDeleteBookmark";
import useMe from "../../me/hooks/useMe";
import { ContentEntity } from "../entities/content.entity";

export const VerseItems = ({
  verses,
  bookmarks,
}: {
  verses: ContentEntity[];
  bookmarks: number[];
}) => {
  const { data: user } = useMe();

  const initVerses = useMemo(() => {
    return verses.map((item) =>
      item.copyWith({
        isBookmark: bookmarks.includes(Number(item.verseId)),
      }),
    );
  }, [verses, bookmarks]);

  const [localVerses, setLocalVerses] = useState<ContentEntity[]>(initVerses);
  // initVerses가 변경될 때 localVerses를 업데이트
  useEffect(() => {
    setLocalVerses(initVerses);
  }, [initVerses]);

  const createBookmark = useCreateBookmark();
  const deleteBookmark = useDeleteBookmark();

  const handleBookmarkClick = (item: ContentEntity) => {
    const previousVerses = [...localVerses]; // 이전 상태 저장

    // UI 즉시 변경
    const updatedVerses = localVerses.map((verse) =>
      verse.verseId === item.verseId
        ? verse.copyWith({ isBookmark: !item.isBookmark }) // 북마크 상태 토글
        : verse,
    );
    setLocalVerses(updatedVerses);

    if (item.isBookmark) {
      toast("북마크에 제거되었어요.", {
        icon: "🗑️",
      });
    } else {
      toast("북마크에 추가되었어요.", {
        icon: "✅",
      });
    }

    // 비동기 요청 처리
    const action = item.isBookmark
      ? deleteBookmark.mutateAsync
      : createBookmark.mutateAsync;
    action({
      bookId: item.bookId,
      chapterId: item.chapterId,
      verseId: item.verseId,
    }).catch((error) => {
      toast(error.message, {
        icon: "❗",
      });
      setLocalVerses(previousVerses); // 실패 시 이전 상태로 복원
    });
    // queryClient.invalidateQueries({
    //   queryKey: [QueryKeys.getBookmarks, item.bookId, item.chapterId],
    // });
    // queryClient.invalidateQueries({
    //   queryKey: [QueryKeys.getBookmarks],
    // });
  };

  return localVerses.map((item: ContentEntity, index: number) => {
    return (
      <VerseItem
        key={index}
        item={item}
        onClick={() => {
          if (!user) {
            toast("로그인 후 북마크를 추가할 수 있어요.", {
              icon: "🔥",
            });
            return;
          }
          if (createBookmark.isPending || deleteBookmark.isPending)
            return toast("잠시만 기다려주세요", {
              icon: "📖✨",
            });
          else handleBookmarkClick(item);
        }}
      />
    );
  });
};

const VerseItem = ({
  item,
  onClick,
}: {
  item: ContentEntity;
  onClick?: (content: ContentEntity) => void;
}) => {
  return (
    <Column
      onClick={() => onClick && onClick(item)}
      className={
        "cursor-pointer py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
      }
    >
      <Row className="items-start">
        <SubText
          className={`${item.isBookmark ? "text-emerald-700 dark:text-emerald-500" : ""} pt-3 pr-3`}
        >
          {item.verseId}
        </SubText>
        <MainText
          className={`${item.isBookmark ? "text-emerald-800 dark:text-emerald-500" : ""} mt-0.5 mb-0.5 pt-2 text-xl`}
        >
          {item.content}
        </MainText>
      </Row>
    </Column>
  );
};
