import { Card } from "./Card";
import { Column } from "./Column";
import { ImageLoader } from "./ImageLoader";
import { MainText } from "./MainText";
import { SubText } from "./SubText";

interface CardPreviewProps {
  imageUrlCompressed: string;
  title: string;
  subtitle: string;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

export const CardPreview = (props: CardPreviewProps) => {
  return (
    <Card
      className={`${props.className}`}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
    >
      <Column>
        <ImageLoader
          src={props.imageUrlCompressed}
          alt={props.imageUrlCompressed}
          className="h-52 w-full object-cover"
          expandEffect={true}
        />
        <Column className="w-full justify-center p-4">
          <MainText className="pr-2 text-2xl font-semibold">
            {props.title}
          </MainText>
          <SubText className="text-lg">{props.subtitle}</SubText>
        </Column>
      </Column>
    </Card>
  );
};
