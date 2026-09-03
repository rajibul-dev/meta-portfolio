import Button from "./button";

export default function EmptyState({
  title,
  children,
  href = "/",
  action = "Back to home →",
  borderState = "y",
}: {
  title: string;
  children: React.ReactNode;
  href?: string;
  action?: string;
  borderState?: "t" | "b" | "y" | "none";
}) {
  return (
    <div className="primary-container pb-20">
      <div
        className={`border-${borderState} border-sand-200 py-12 max-xs3:py-10`}
      >
        <h2 className="mb-3 font-serif text-3xl text-sand-900 max-md3:text-2xl">
          {title}
        </h2>

        <p className="mb-7 max-w-2xl text-lg leading-[1.7] text-sand-700 max-md3:text-base max-xs3:leading-[1.6]">
          {children}
        </p>

        <Button href={href}>{action}</Button>
      </div>
    </div>
  );
}
