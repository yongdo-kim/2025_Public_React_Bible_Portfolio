import React from "react";
export const MainText = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`font-pretendard text-gray-900 dark:text-gray-100`}>
      <div className={`${className}`}>{children}</div>
    </div>
  );
};
