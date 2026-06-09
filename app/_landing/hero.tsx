import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroButtonCommonStyles = clsx(
    `px-10 max-[845px]:px-5 max-md3:px-6 py-3 rounded-sm max-md3:text-base text-lg transition-colors`,
  );

  return (
    <section className="max-md2:justify-items-center items-center gap-16 grid grid-cols-[1.3fr_0.9fr] max-md2:grid-cols-1">
      {/* Hero content portion */}
      <div className={`max-w-[58ch] max-md2:max-w-[46ch] max-md2:text-center`}>
        <h1
          className={clsx(
            `mb-4 font-serif font-normal text-sand-900 max-xs3:text-3xl max-md3:text-4xl text-5xl leading-[1.2] max-xs3:leading-[1.3]`,
          )}
        >
          <span>Hi, I'm Rajibul Islam.</span>
          <br />
          <span className="text-sand-500">
            Software Engineer, Aspiring Singer, and Lifelong Student of
            Interesting Things.
          </span>
        </h1>
        <p
          className={`mb-8 max-w-[60ch] text-sand-700 max-md3:text-base text-lg leading-[1.7] hero-copy max-xs3:leading-[1.6]`}
        >
          I use this space to share projects, document what I'm learning, and
          tell the stories behind the things I build. From software engineering
          and design to singing and creative exploration, this site is a record
          of curiosity in motion.
        </p>

        {/* hero buttons */}
        <div className="flex max-md2:justify-center gap-4">
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
          className="rounded-sm max-md2:w-full max-w-100 h-auto object-cover"
        />
      </div>
    </section>
  );
}
