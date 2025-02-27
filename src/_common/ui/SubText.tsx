import React from "react";
export const SubText = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`text-gray-500 dark:text-gray-400`}>
      {/* 동적분기에 문제가 있는 것 같아 inline으로 한번더 덮어씌우는 형태 추가 */}
      <div className={`${className}`}>{children}</div>
    </div>
  );
};
