//스택을 구현하려고 전체는 relative
//children 순회하면서 absolute, z-index 적용

import React from "react";

export const Stack = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child as React.ReactElement, {
          style: { position: "absolute", zIndex: index }, // z-index를 인라인 스타일로 설정
          className: `${(child as React.ReactElement).props.className || ""}`,
        });
      })}
    </div>
  );
};
