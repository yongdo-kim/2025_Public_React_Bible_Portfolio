import React from "react";
//카드는, 둥글고, 쉐도우 있음.
export const Card = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`mt-1 cursor-pointer overflow-hidden rounded-md shadow-md ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
