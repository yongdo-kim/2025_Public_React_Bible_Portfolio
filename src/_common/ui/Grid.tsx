import React from "react";
export const Grid = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
