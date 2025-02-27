import React from "react";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full min-w-96 max-w-screen-lg p-6">
      {children}
    </div>
  );
};
