export default function QuoteAttention({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-8 pl-5 border-sand-200 border-l-2 ${className}`}>
      {children}
    </div>
  );
}
