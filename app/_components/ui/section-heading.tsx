import Link from "next/link";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center mb-7 pb-4 border-sand-200 border-b">
      {children}
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-sand-900 text-2xl">{children}</h2>;
}

function PageLink({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="flex items-center gap-1 font-medium hover:text-amber-700 transition-colors">
      {children}
    </Link>
  );
}

SectionHeading.Heading = Heading;
SectionHeading.PageLink = PageLink;
