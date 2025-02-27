import { Column } from "./Column";
import { MainText } from "./MainText";
import React from "react";
export const NoData = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Column className={`items-center justify-center ${className}`}>
      <MainText>{children}</MainText>
    </Column>
  );
};
