import { IconType } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MainText } from "./MainText";
import { Row } from "./Row";
import React from "react";
export type ListTileType = {
  icon?: React.ReactElement<IconType>;
  title: string;
  path: string;
};

export const ListTile = ({
  listType,
  className,
}: {
  listType: ListTileType;
  className?: string;
} & React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className="list-none px-10">
      <Row className="borderpx-10 w-full items-center">
        <Link className="w-full" to={listType.path}>
          {/* 1 */}
          <Row className={`items-center justify-between ${className}`}>
            <Row className="items-center">
              {listType.icon && <MainText>{listType.icon}</MainText>}
              <MainText className="ml-4">{listType.title}</MainText>
            </Row>

            {/* 2 */}
            <MainText className="mx-3 h-full">
              <FaChevronRight className="text-gray-500" />
            </MainText>
          </Row>
        </Link>
      </Row>
    </li>
  );
};
