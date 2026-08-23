import clsx from "clsx";

export default function PageHeading({
  children,
  paragraph = "",
  className = "",
  hClassName = "",
  pClassName = "",
}: {
  children: React.ReactNode;
  paragraph?: React.ReactNode;
  className?: string;
  hClassName?: string;
  pClassName?: string;
}) {
  return (
    <header
      className={clsx(
        "mt-18 primary-container max-xs3:mt-14",
        paragraph ? "mb-12" : "mb-10",
        className,
      )}
    >
      <h1
        className={clsx(
          "font-serif text-sand-900 text-4xl md:text-5xl max-xs3:text-3xl",
          paragraph && "mb-6 max-xs3:mb-4",
          hClassName,
        )}
      >
        {children}
      </h1>

      {paragraph && (
        <p
          className={clsx(
            "max-w-[75ch] text-sand-700 text-lg leading-[1.7] max-md3:text-base max-xs3:leading-[1.6]",
            pClassName,
          )}
        >
          {paragraph}
        </p>
      )}
    </header>
  );
}
