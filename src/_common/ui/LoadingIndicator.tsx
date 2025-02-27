import { FullScreen } from "./FullScreen";
export const LoadingIndicator = ({
  className,
  isFullScreen,
}: {
  className?: string;
  isFullScreen?: boolean;
}) => {
  const indictoar = (
    <div
      className={`h-6 w-6 animate-spin rounded-full border-4 border-emerald-700 border-t-transparent dark:border-emerald-300 dark:border-t-transparent ${className}`}
    ></div>
  );

  return isFullScreen ? <FullScreen>{indictoar}</FullScreen> : indictoar;
};
