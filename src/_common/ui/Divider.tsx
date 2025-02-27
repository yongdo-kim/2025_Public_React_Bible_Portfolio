//디바이더
export const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={`border-t border-gray-200 dark:border-gray-700 ${className}`}
    />
  );
};
