import { Link } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { useMediaQuery } from "react-responsive";
import { ROUTES } from "../../_common/navigation/constants/routes";
import { Column } from "../../_common/ui/Column";
import { MainText } from "../../_common/ui/MainText";
import { Row } from "../../_common/ui/Row";
import useMe from "../../me/hooks/useMe";
import { useMyBookmark } from "../../me/hooks/useMyBookmark";
import { numberToBookNameMapping } from "../../shared/utils/numberToBookNameMapping";
import { MyBookmarkEntity } from "../entities/mybookmark.entity";

const BookmarkPieChart = () => {
  const { data: user } = useMe();
  const { data: bookmarks } = useMyBookmark();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const chartSize = isMobile ? 300 : 600;
  const outerRadius = isMobile ? 100 : 150;
  const innerRadius = isMobile ? 40 : 60;

  const bookmarksMap: Record<string, number> = {};
  bookmarks?.forEach((bookmark: MyBookmarkEntity) => {
    const { bookId } = bookmark;

    if (bookmarksMap[bookId]) {
      bookmarksMap[bookId] += 100;
    } else {
      bookmarksMap[bookId] = 100;
    }
  });

  const bookmarksList = Object.entries(bookmarksMap).map(([bookId, count]) => ({
    name: bookId,
    value: count,
  }));

  if (bookmarksList.length > 0 && user) {
    return (
      <Column className="items-center justify-center">
        <MainText className="mb-4 text-2xl">
          현재까지 이렇게 구독했어요!
        </MainText>
        <ResponsiveContainer width="100%" height={chartSize}>
          <PieChart>
            <Pie
              data={bookmarksList}
              dataKey="value"
              nameKey="name"
              outerRadius={outerRadius}
              innerRadius={innerRadius}
              fill="#FFFF00"
              label={({ name, percent }) =>
                `${numberToBookNameMapping.get(Number(name))?.name} (${(percent * 100).toFixed(0)}%)`
              }
            >
              {bookmarksList.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={numberToBookNameMapping.get(Number(entry.name))?.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Column>
    );
  } else {
    const data = [{ name: "창세기", value: 100 }];

    return (
      <Column className="items-center justify-center">
        <Link to={ROUTES.BIBLE}>
          <Row>
            <MainText className="mb-4 text-2xl text-emerald-600 dark:text-emerald-500">
              성경탭
            </MainText>

            <MainText className="mb-4 text-2xl">에서 확인 해볼까요?</MainText>
          </Row>
        </Link>
        <ResponsiveContainer width="100%" height={chartSize}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={outerRadius}
              innerRadius={innerRadius}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} stroke="#808080" opacity={0.5} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Column>
    );
  }
};

export default BookmarkPieChart;
