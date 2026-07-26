import clsx from "clsx";

export default function PageHeading({
  children,
  paragraph = "",
}: {
  children: React.ReactNode;
  paragraph?: React.ReactNode;
}) {
  return (
    <header
      className={clsx("mt-18 primary-container", paragraph ? "mb-12" : "mb-10")}
    >
      <h1
        className={clsx(
          "font-serif text-sand-900 text-4xl md:text-5xl",
          paragraph && "mb-6",
        )}
      >
        {children}
      </h1>

      {paragraph && (
        <p className="max-w-[75ch] text-sand-700 text-lg leading-relaxed">
          {paragraph}
        </p>
      )}
    </header>
  );
}
