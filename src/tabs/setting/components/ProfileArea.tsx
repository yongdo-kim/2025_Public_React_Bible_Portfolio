import { GrFavorite } from "react-icons/gr";
import { BorderBox } from "../../../_common/ui/BorderBox";
import { Column } from "../../../_common/ui/Column";
import { ImageLoader } from "../../../_common/ui/ImageLoader";
import { MainText } from "../../../_common/ui/MainText";
import { Row } from "../../../_common/ui/Row";
import { SubText } from "../../../_common/ui/SubText";
import { UserEntity } from "../../../_common/users/entities/user.entity";
import { useMyBookmark } from "../../../me/hooks/useMyBookmark";
import { UserBibleInfo } from "./UserBibleInfo";

export const ProfileArea = ({ user }: { user: UserEntity }) => {
  const { data } = useMyBookmark();
  return (
    <BorderBox className="mx-8 my-1 px-6 sm:w-full">
      <Column className="items-center justify-center">
        <ImageLoader
          className="mt-4 h-auto w-24 rounded-full"
          src={user.picture}
          alt={user.picture}
          expandEffect={false}
        />
        <Column className="h-14 items-center justify-center">
          <MainText className="mt-4">{user.name}님</MainText>
          <SubText className="">오늘도 은혜를 찾아볼까요?</SubText>
        </Column>

        <Row>
          <UserBibleInfo
            isLogin={true}
            count={data?.length ?? 0}
            title={"즐겨찾기"}
            iconType={<GrFavorite className="font-bold text-pink-600" />}
          />
        </Row>
      </Column>
    </BorderBox>
  );
};
