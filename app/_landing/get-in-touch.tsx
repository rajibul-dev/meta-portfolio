import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="py-16 max-sm:pt-20 border-sand-200 sm:border-t primary-container">
      <h2 className="mb-4 font-serif text-sand-900 text-2xl">Let's connect</h2>
      <p className="mb-8 max-w-2xl text-sand-700 leading-relaxed">
        I'm always open to discussing new opportunities, interesting technical
        challenges, or just having a good conversation about code, music, and
        everything in between.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-sand-900 hover:bg-amber-700 shadow-sm px-6 py-3 rounded-sm font-medium text-sand-50 transition-colors"
      >
        Get in touch
      </Link>
    </section>
  );
}
