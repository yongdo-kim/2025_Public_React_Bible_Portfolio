import React from "react";
//모든 페이지에서 필요한 패딩, 배경색상, 높이 적용
export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-slate-50 dark:bg-gray-950">
      <div className="border-divider mx-auto min-h-screen pb-16 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
};
