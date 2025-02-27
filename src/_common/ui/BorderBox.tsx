import React from "react";

export const BorderBox = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;

  className?: string;
} & React.ButtonHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`rounded-2xl border border-gray-300 dark:border-gray-600 ${className}`}
      {...rest}
    >
      <div>{children}</div>
    </div>
  );
};
