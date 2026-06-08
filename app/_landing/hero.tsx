import clsx from "clsx";
import Link from "next/link";

const smallerHeroHeadingStyles = true;

export default function Hero() {
  const noArtHeroTextWidthReduceStyles = `max-w-[${smallerHeroHeadingStyles ? "58ch" : "75ch"}]`;
  const heroButtonCommonStyles = `px-10 py-3 text-lg transition-colors rounded-sm`;

  return (
    <section>
      {/* Hero content portion */}
      <div className={noArtHeroTextWidthReduceStyles}>
        <h1
          className={clsx(
            "text-sand-900 font-normal font-serif text-5xl leading-[1.2] mb-4",
            smallerHeroHeadingStyles ? "text-5xl" : "text-6xl",
          )}
        >
          <span>Hi, I'm Rajibul Islam.</span>
          <br />
          <span className="text-sand-500">
            Software Engineer, Aspiring Singer, and Lifelong Student of
            Interesting Things.
          </span>
        </h1>
        <p className="text-lg leading-[1.7] mb-8 text-sand-700">
          I use this space to share projects, document what I'm learning, and
          tell the stories behind the things I build. From software engineering
          and design to singing and creative exploration, this site is a record
          of curiosity in motion.
        </p>

        {/* hero buttons */}
        <div className="flex gap-4">
          <Link
            href="/writing"
            className={`bg-brown text-sand-100 hover:bg-amber-700 ${heroButtonCommonStyles}`}
          >
            Read My Writing
          </Link>
          <Link
            href="/contact"
            className={`ring ring-inset ring-sand-200 bg-sand-100 text-sand-900 hover:bg-sand-200 ${heroButtonCommonStyles}`}
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* any art portion or picture goes here */}
    </section>
  );
}
