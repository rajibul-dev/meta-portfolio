export default function ExternalLinkInline({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      {...props}
      className="font-medium text-sand-700 underline decoration-sand-300 underline-offset-4 transition-colors hover:text-amber-700 hover:decoration-amber-700/50"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
