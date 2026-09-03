import type { Metadata } from "next";
import Image from "next/image";
import MDXContent from "@/app/_components/mdx-content";
import LabEntry from "@/app/_components/lab/lab-entry";
import PageHeading from "@/app/_components/ui/page-heading";
import { getCollection, getContent } from "@/app/_lib/content";
import Button from "../_components/ui/button";

function getPreviewSource(content: string) {
  const blocks = content
    .replace(/^\s*{\s*\/\*[\s\S]*?\*\/\s*}\s*/g, "")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.find((block) => !block.startsWith("#")) ?? "";
}

export const metadata: Metadata = {
  title: "The Lab",
  description:
    "An ongoing log of experiments, learning, observations, sketches, and unfinished ideas.",
};

export default async function Lab() {
  const logs = await getCollection("lab");

  const entries = await Promise.all(
    logs.map(async (log) => {
      const post = await getContent("lab", log.slug);
      const previewSource = getPreviewSource(post.content);

      return {
        log,
        post,
        previewSource,
      };
    }),
  );

  return (
    <main>
      <div className="narrow-container">
        <header className="mb-16 flex items-center gap-8 md:mb-24">
          <PageHeading
            className="mt-18 mb-0 min-w-0 flex-1 max-w-none! mx-0! px-0!"
            paragraph="Welcome to my digital garden. This is a stream-of-consciousness log of my ongoing experiments, learning progress, snippets, and half-formed ideas. It's unpolished by design."
          >
            The Lab
          </PageHeading>

          <div className="mt-18 hidden w-64 shrink-0 md:block">
            <div className="aspect-square overflow-hidden border border-sand-300 bg-sand-200 p-2">
              <Image
                src="/images/lab-hero-image.jpg"
                alt="Notebook sketches"
                width={480}
                height={480}
                className="h-full w-full object-cover grayscale opacity-80 mix-blend-multiply"
              />
            </div>
          </div>
        </header>

        {entries.length === 0 ? (
          <div className="pb-20">
            <div className="border-t border-sand-200 py-12 max-xs3:py-10">
              <h2 className="mb-3 font-serif text-3xl text-sand-900 max-md3:text-2xl">
                Nothing here yet.
              </h2>

              <p className="mb-7 max-w-2xl text-lg leading-[1.7] text-sand-700 max-md3:text-base max-xs3:leading-[1.6]">
                The lab is empty for now. That's okay; it'll fill up as I
                experiment, learn, and make things.
              </p>

              <Button href="/">Back to home →</Button>
            </div>
          </div>
        ) : (
          <div className="relative ml-4 max-w-3xl space-y-12 border-l border-sand-300 pb-12 md:ml-6">
            {entries.map(({ log, post, previewSource }) => {
              const hasMore = post.wordCount > 45;

              return (
                <LabEntry
                  key={log.slug}
                  slug={log.slug}
                  date={log.date}
                  labType={log.labType}
                  permalink={log.permalink}
                  hasMore={hasMore}
                  preview={
                    previewSource ? <MDXContent source={previewSource} /> : null
                  }
                >
                  <MDXContent source={post.content} />
                </LabEntry>
              );
            })}

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-1.25 top-1.5 h-2 w-2 rounded-full bg-sand-300" />

              <p className="font-mono text-sm italic text-sand-400">
                End of current logs...
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
