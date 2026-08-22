import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main>
      <article className="primary-container pt-18 pb-20">
        <h1 className="mb-12 max-md:text-4xl max-xs3:text-3xl font-serif text-5xl text-sand-900">
          About Me
        </h1>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
          <div className="order-1 mx-auto w-full max-w-90 md:order-2 md:mx-0 md:shrink-0 md:ml-auto md:mr-0">
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
                Rajibul Islam - 2026
              </figcaption>
            </figure>
          </div>

          <div className="order-2 max-w-3xl text-xl leading-[1.7] max-md3:text-lg max-xs3:leading-[1.6] text-sand-800 md:order-1">
            <p className="mb-6 font-serif text-2xl leading-relaxed text-sand-900">
              I'm Rajibul. Online, I usually go by Raji, or ラジ.
            </p>

            <Paragraph>
              I'm a software developer who likes understanding how things work
              and building things that are useful to people. I enjoy working
              across the stack, from interfaces and application logic to
              databases, deployment, and the systems underneath them.
            </Paragraph>

            <Paragraph>
              I originally got interested in software through the web. When I
              learned HTML and CSS, I was fascinated by the fact that I could
              create something that looked like the websites I used every day.
              JavaScript opened up another level of possibilities: programming
              meant I could make things actually do things, and learning more
              gave me more abilities to build different kinds of software.
            </Paragraph>

            <Paragraph>
              That curiosity has stayed with me. These days, I'm interested in
              much more than just learning another framework. I like exploring
              foundational concepts and building small things to understand
              them, whether that means experimenting with servers and protocols,
              deployment, rendering, or other parts of computing that are
              usually hidden underneath an application.
            </Paragraph>

            <Paragraph>
              I've found that this kind of experimentation changes the way I see
              software. The more I understand what is underneath the
              abstractions, the more possibilities I see for things I could
              build. And when those ideas are combined with good UX and
              thoughtful design, software can become something that people
              genuinely enjoy using.
            </Paragraph>

            <Paragraph>
              My experience so far is primarily with the JavaScript ecosystem:
              React, Next.js, Node.js, TypeScript, and Express.js. I've built
              personal projects as well as long-term client software, including
              Voccaria, a web application for a singing teacher that I've
              continued developing and maintaining while working directly with
              its founder.
            </Paragraph>

            <Paragraph>
              I'm also expanding into C# and .NET, and exploring game
              development with Godot and Unity. Game development interests me
              not simply because I like games, but because it opens up an
              entirely different world of programming. Systems, graphics,
              physics, interaction, simulation, audio, and the possibility of
              creating whole experiences rather than just applications.
            </Paragraph>

            <Paragraph>
              Software is a major part of what I want to do, but it isn't the
              only thing I want to make.
            </Paragraph>

            <Paragraph>
              Singing is an important part of my life, and I want to keep
              developing as a singer while exploring voice acting and other
              forms of entertainment. I'm learning Japanese because I genuinely
              enjoy the language, music, and culture. I'm also interested in 3D
              creation, and in the many other things that become possible once I
              have the skills to make them.
            </Paragraph>

            <Paragraph>
              I don't want to decide too early what the final shape of all this
              has to be. I like the idea of becoming capable of making very
              different kinds of things, and letting the things I make tell that
              story over time.
            </Paragraph>

            <h2 className="mt-12 mb-6 max-md3:text-2xl font-serif text-3xl text-sand-900">
              Why This Website Exists
            </h2>

            <Paragraph>
              This is my corner of the internet. It's where I keep my projects,
              case studies, writing, experiments, and the things I'm learning.
              Some things here will be finished work; others will simply
              document something I'm still figuring out.
            </Paragraph>

            <Paragraph>
              I also want it to be useful to people who might want to work with
              me. A résumé can tell you what technologies I've used, but it
              can't really show how I approach problems, what I choose to build,
              or what I'm interested in becoming capable of.
            </Paragraph>

            <Paragraph>
              So this site is both a record of what I've made and a place for
              what comes next.
            </Paragraph>
          </div>
        </div>
      </article>
    </main>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="mb-6">{children}</p>;
}
