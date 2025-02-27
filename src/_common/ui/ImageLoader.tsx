export const ImageLoader = ({
  src,
  alt,
  className,
  expandEffect = true,
  isPending = false,
}: {
  src: string;
  alt: string;
  className?: string;
  expandEffect?: boolean;
  isPending?: boolean;
}) => {
  let expandedClass = "";
  if (expandEffect) {
    expandedClass =
      "transition-transform duration-300 ease-in-out hover:scale-110";
  }

  return (
    <>
      {isPending ? (
        <div className={`mt-4 h-24 w-24 rounded-full bg-gray-200`} />
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`${className} ${expandedClass} transform object-cover`}
        />
      )}
    </>
  );
};
