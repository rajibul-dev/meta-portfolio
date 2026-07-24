const footerLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rajibul-dev",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rajibul-dev",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rajibulislam201",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto py-10 border-sand-200 border-t">
      <div className="flex md:flex-row flex-col justify-between items-center text-sand-500 text-sm primary-container">
        <p>© {new Date().getFullYear()} Rajibul Islam. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sand-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
