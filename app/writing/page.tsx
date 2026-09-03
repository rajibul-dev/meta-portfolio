import type { Metadata } from "next";
import Link from "next/link";
import PageHeading from "../_components/ui/page-heading";
import { getCollection } from "../_lib/content";
import EmptyState from "../_components/ui/empty-state";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays, technical deep-dives, and reflections on engineering, art, learning, and building.",
};

export default async function Writing() {
  const posts = await getCollection("writing");

  // Group articles by year
  const groupedPosts: Record<string, typeof posts> = {};
  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!groupedPosts[year]) {
      groupedPosts[year] = [];
    }
    groupedPosts[year].push(post);
  });

  // Sort years descending
  const years = Object.keys(groupedPosts).sort().reverse();

  return (
    <main>
      <PageHeading paragraph="Writing is how I figure out what I actually think. Here you'll find long-form essays, technical deep-dives, and personal reflections on the intersection of engineering and art.">
        Writing
      </PageHeading>

      {posts.length === 0 ? (
        <EmptyState
          title="No 'writing' posts yet."
          borderState="t"
        >
          I haven't published anything here yet. When I have something I
          actually want to write about, I'll put it here.
        </EmptyState>
      ) : (
        <div className="space-y-20 primary-container pb-20 pt-8">
          {years.map((year) => (
            <div key={year}>
              <h2 className="mb-8 border-b border-sand-200 pb-4 font-mono text-xl text-sand-400">
                {year}
              </h2>

              <div className="flex flex-col gap-6">
                {groupedPosts[year].map((post) => (
                  <Link
                    key={post.slug}
                    href={`/writing/${post.slug}`}
                    className="group -mx-4 flex flex-col gap-2 rounded-sm p-4 transition-colors hover:bg-sand-100 md:flex-row md:items-baseline md:gap-8"
                  >
                    <time className="w-24 shrink-0 font-mono text-sm text-sand-500">
                      {post.date.split(",")[0]}
                    </time>

                    <div className="flex-1">
                      <h3 className="mb-1 font-serif text-xl text-sand-900 transition-colors group-hover:text-amber-700">
                        {post.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-sand-600">
                        {post.description}
                      </p>
                    </div>

                    <span className="hidden font-mono text-xs text-sand-400 md:block">
                      {post.readingTime} min read
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
