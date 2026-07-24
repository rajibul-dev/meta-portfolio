import clsx from "clsx";
import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "medium",
  externalLink = false,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "link" | "danger";
  size?: "small" | "medium" | "large";
  externalLink?: boolean;
  className?: string;
}) {
  const buttonStyles = clsx(
    `inline-flex box-border items-center gap-1 shadow-xs border border-transparent rounded-base focus:outline-none focus:ring-4 font-medium leading-5 transition-colors`,
    variant === "primary" && `bg-brown text-sand-100 hover:bg-amber-700`,
    variant === "secondary" &&
      `ring ring-inset ring-sand-200 bg-sand-100 text-sand-900 hover:bg-sand-200`,
    variant === "tertiary" &&
      `bg-transparent hover:bg-sand-100 focus:ring-sand-300 text-sand-900`,
    variant === "ghost" &&
      `bg-transparent hover:bg-sand-100 focus:ring-sand-300 text-sand-900`,
    variant === "link" &&
      `text-sand-900 hover:text-amber-700 text-sm decoration-sand-300 hover:decoration-amber-700/50 underline underline-offset-4 shadow-none! `,
    variant === "danger" &&
      `bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white`,
    size === "small" && `px-3 py-1.5 text-sm rounded-sm`,
    size === "medium" &&
      `${variant === "link" ? "py-0 px-0" : "px-6 py-3"} text-base rounded-sm`,
    size === "large" && `px-8 py-4 text-lg rounded-sm`,
  );

  if (href) {
    return (
      <Link href={href} {...props} className={clsx(buttonStyles, className)}>
        {children}
      </Link>
    );
  }

  if (externalLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(buttonStyles, className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={clsx(buttonStyles, className)} {...props}>
      {children}
    </button>
  );
}
