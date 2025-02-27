import { LoadingIndicator } from "./LoadingIndicator";
import { MainText } from "./MainText";
import React from "react";

export const Button = ({
  children,
  className,
  isLoading,
  ...rest
}: {
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      disabled={isLoading}
      {...rest}
      className={`cursor-pointer rounded-2xl bg-emerald-600 px-4 py-2 ${className} hover:bg-emerald-500`}
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <MainText className="text-gray-100 dark:text-gray-100">
          {children}
        </MainText>
      )}
    </button>
  );
};
