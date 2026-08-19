import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Rajibul Islam — software engineering, singing, learning, and the ideas that connect them.",
};

export default function About() {
  return (
    <main>
      <article className="primary-container px-4 pt-18 pb-20">
        <h1 className="mb-12 font-serif text-5xl text-sand-900">About Me</h1>

        <div className="float-right mb-8 ml-8 w-90 max-md:float-none max-md:mx-auto max-md:mb-10 max-md:ml-0">
          <figure>
            <div className="aspect-3/4 rotate-2 overflow-hidden border border-sand-300 bg-sand-200 p-2">
              <Image
                src="/images/rajibul-islam.jpg"
                alt="Rajibul Islam"
                width={800}
                height={1067}
                className="h-full w-full object-cover grayscale opacity-90"
              />
            </div>

            <figcaption className="mt-4 text-center font-mono text-xs text-sand-500">
              Thinking about architecture and acoustics.
            </figcaption>
          </figure>
        </div>

        <div className="max-w-3xl text-xl leading-[1.7] text-sand-800">
          <p className="mb-6 font-serif text-2xl leading-relaxed text-sand-900">
            I'm Rajibul. Online, I often go by Raji or ラジ. I am fascinated by
            the intersection of rigid logic and fluid expression.
          </p>

          <p className="mb-6">
            By day, I am a software developer. I love taking complex, messy
            domain problems and translating them into elegant, maintainable
            systems. There's a specific kind of quiet joy in deleting code,
            simplifying architecture, and making things run just a little bit
            smoother.
          </p>

          <p className="mb-6">
            Away from the keyboard, I am an aspiring singer. It's a completely
            different kind of discipline—one that requires me to get out of my
            head and into my body. Studying voice has taught me more about
            vulnerability, patience, and incremental progress than any technical
            book ever could.
          </p>

          <p className="mb-6">
            I consider myself a polymath at heart. I don't believe in confining
            myself to a single discipline. I am as likely to be found reading
            about compiler design as I am studying vocal pedagogy or practicing
            Japanese kanji. I believe that ideas cross-pollinate, and that the
            best insights often come from outside one's immediate field of
            expertise.
          </p>

          <h2 className="mt-12 mb-6 font-serif text-3xl text-sand-900">
            The Philosophy Behind This Space
          </h2>

          <p className="mb-6">
            This website isn't a resume, nor is it a startup landing page trying
            to convert you into a customer. It's a digital garden. A personal
            corner of the internet where I can exist as a whole person, not just
            a list of skills or a job title.
          </p>

          <p className="mb-6">
            You'll find polished case studies sitting next to half-baked
            thoughts. You'll find essays on software alongside logs of my
            singing practice. It's designed for reading, exploring, and quiet
            contemplation.
          </p>

          <blockquote className="mt-10 border-l-2 border-amber-700/50 bg-amber-700/5 py-4 pl-6 pr-5 font-serif text-xl italic leading-relaxed text-sand-700">
            "The most beautiful thing we can experience is the mysterious. It is
            the source of all true art and all science."
          </blockquote>
        </div>
      </article>
    </main>
  );
}
