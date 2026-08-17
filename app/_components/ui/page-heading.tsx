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
        "mt-18 primary-container",
        paragraph ? "mb-12" : "mb-10",
        className,
      )}
    >
      <h1
        className={clsx(
          "font-serif text-sand-900 text-4xl md:text-5xl",
          paragraph && "mb-6",
          hClassName,
        )}
      >
        {children}
      </h1>

      {paragraph && (
        <p
          className={clsx(
            "max-w-[75ch] text-sand-700 text-lg leading-relaxed",
            pClassName,
          )}
        >
          {paragraph}
        </p>
      )}
    </header>
  );
}
