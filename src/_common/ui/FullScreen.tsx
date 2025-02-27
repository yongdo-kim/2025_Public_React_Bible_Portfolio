import React from "react";
export const FullScreen = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`flex h-screen items-center justify-center ${className}`}>
      {children}
    </div>
  );
};
