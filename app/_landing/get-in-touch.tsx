import Button from "../_components/ui/button";

export default function GetInTouch() {
  return (
    <section className="py-16 max-sm:pt-20 border-sand-200 sm:border-t primary-container">
      <h2 className="mb-4 font-serif text-sand-900 text-2xl">Let's connect</h2>
      <p className="mb-8 max-w-2xl text-sand-700 leading-relaxed">
        I'm always open to discussing new opportunities, interesting technical
        challenges, or just having a good conversation about software, music,
        and everything in between.
      </p>
      <Button href="/contact">Get in touch &rarr;</Button>
    </section>
  );
}
