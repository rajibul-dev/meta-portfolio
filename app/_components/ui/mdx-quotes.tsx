export default function QuoteAttention({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <blockquote
      {...props}
      className="my-8 rounded-r-sm border-l-2 border-amber-700/50 bg-amber-700/5 pt-1 pr-5 pb-1 pl-5 font-serif text-xl leading-[1.65] text-sand-700 md:pl-6 md:text-2xl [&_p]:mb-0"
    >
      {children}
    </blockquote>
  );
}
