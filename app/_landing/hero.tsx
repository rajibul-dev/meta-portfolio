import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const smallerHeroHeadingStyles = true;

export default function Hero() {
  const noArtHeroTextWidthReduceStyles = clsx(
    smallerHeroHeadingStyles ? "max-w-[58ch]" : "max-w-[75ch]",
  );
  const heroButtonCommonStyles = `px-10 py-3 text-lg transition-colors rounded-sm`;

  return (
    <section className="items-center gap-16 grid grid-cols-[1.3fr_0.9fr]">
      {/* Hero content portion */}
      <div className={noArtHeroTextWidthReduceStyles}>
        <h1
          className={clsx(
            "mb-4 font-serif font-normal text-sand-900 text-5xl leading-[1.2]",
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
        <p className="mb-8 max-w-[60ch] text-sand-700 text-lg leading-[1.7] hero-copy">
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
      <div>
        <Image
          src="/images/rajibul-islam.jpg"
          alt="Rajibul Islam"
          width={1000}
          height={1250}
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="rounded-sm max-w-100 h-auto object-cover"
        />
      </div>
    </section>
  );
}
