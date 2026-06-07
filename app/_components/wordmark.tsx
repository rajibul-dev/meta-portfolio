import Link from "next/link";

export default function Wordmark() {
  return (
    <Link
      role="logo"
      href="/"
      className="font-serif text-brown text-2xl font-semibold flex gap-1 mt-1 cursor-pointer hover:text-amber-700 transition-colors"
    >
      <span>Raji</span>
      <span>ラジ</span>
    </Link>
  );
}
