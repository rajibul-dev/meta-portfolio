import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroButtonCommonStyles = clsx(
    `px-10 max-[845px]:px-5 max-md3:px-6 py-3 rounded-sm font-medium max-md3:text-base text-lg transition-colors`,
  );

  return (
    <section className="max-md2:justify-items-center items-center gap-16 grid grid-cols-[1.3fr_0.9fr] max-md2:grid-cols-1 pt-12 pb-12 primary-container">
      {/* Hero content portion */}
      <div className={`max-w-[62ch] max-md2:max-w-[46ch] max-md2:text-center`}>
        <h1
          className={clsx(
            `mb-4 font-serif font-normal text-sand-900 max-xs3:text-3xl max-md3:text-4xl text-5xl leading-[1.2] max-xs3:leading-[1.3]`,
          )}
        >
          <span>Hi, I'm Rajibul Islam.</span>
          <br />
          <span className="text-sand-500">
            I build useful software and create things I hope people find
            enjoyable.
          </span>
        </h1>
        <p
          className={`mb-8 max-w-[60ch] text-sand-700 max-md3:text-base text-lg leading-[1.7] max-xs3:leading-[1.6]`}
        >
          This is my corner of the internet, where I share the software I build,
          what I'm learning, and experiments I'm curious about. It's a place to
          see how I think, what I can do, and what I'm working towards, whether
          you're here to explore my work, learn something, or work with me.
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
