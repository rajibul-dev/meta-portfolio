import Button from "../_components/ui/button";

export default function GetInTouch() {
  return (
    <section
      id="get-in-touch"
      className="py-16 max-sm:pt-20 border-sand-200 sm:border-t primary-container"
    >
      <h2 className="mb-4 font-serif text-sand-900 text-4xl">Let's connect</h2>
      <p className="mb-8 max-w-2xl max-md3:text-base  text-sand-700 text-md leading-[1.7] max-xs3:leading-[1.6]">
        If you'd like to work together, talk about something I've built, or just
        have a conversation about software, music, or the other things I'm
        exploring, feel free to get in touch.
      </p>
      <Button href="/contact">Get in touch &rarr;</Button>
    </section>
  );
}
