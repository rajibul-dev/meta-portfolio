import type { Metadata } from "next";
import PageHeading from "../_components/ui/page-heading";

const contactsAfterEmail = [
  {
    title: "Code",
    href: "https://github.com/rajibul-dev",
    text: "github.com/rajibul-dev",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/rajibulislam201",
    text: "instagram.com/rajibulislam201",
  },
  {
    title: "Professional",
    href: "https://www.linkedin.com/in/rajibul-dev",
    text: "linkedin.com/in/rajibul-dev/",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rajibul Islam.",
};

export default function Contact() {
  return (
    <main>
      <PageHeading
        paragraph="I'm always open to interesting conversations about software architecture, vocal technique, digital minimalism, or anything else you found interesting here."
        className="text-center max-w-[65ch]! mx-auto"
        pClassName="max-w-full"
      >
        Get in Touch
      </PageHeading>

      <section className="bg-sand-100 max-md:p-8 p-12 border border-sand-200 mb-16 max-w-[65ch] mx-auto">
        <h2 className="font-mono text-sm uppercase tracking-wide text-sand-500 mb-6 text-center">
          Email
        </h2>
        <a
          href="mailto:hello@example.com"
          className="max-md:text-2xl text-3xl font-serif text-sand-900 hover:text-sand-600 transition-colors underline decoration-sand-300 underline-offset-8 block text-center"
        >
          hello@example.com
        </a>
      </section>

      <section className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 pt-5 pb-20 px-5">
        {contactsAfterEmail.map((contact) => (
          <div
            className="flex flex-col items-center"
            key={contact.title}
          >
            <h2 className="font-mono text-sm uppercase tracking-wide text-sand-500 mb-4">
              {contact.title}
            </h2>
            <a
              href={contact.href}
              className="text-lg font-medium text-sand-800 hover:text-sand-500 transition-colors text-center hover:underline decoration-sand-300 underline-offset-4"
            >
              {contact.text}
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
