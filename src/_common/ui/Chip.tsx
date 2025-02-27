import React from "react";
import { MainText } from "./MainText";
export const Chip = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;

  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className={`cursor-pointer rounded-full border-2 border-emerald-600 px-4 py-1 hover:bg-emerald-500 ${className} `}
    >
      <MainText className="hover:text-gray-100">{children}</MainText>
    </button>
  );
};
