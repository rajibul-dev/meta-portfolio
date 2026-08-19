import type { Metadata } from "next";
import Link from "next/link";
import PageHeading from "../_components/ui/page-heading";
import { getCollection } from "../_lib/content";

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

      <div className="space-y-20 primary-container pb-20 pt-8">
        {years.map((year) => (
          <div key={year}>
            <h2 className="font-mono text-xl text-sand-400 mb-8 pb-4 border-b border-sand-200">
              {year}
            </h2>
            <div className="flex flex-col gap-6">
              {groupedPosts[year].map((post) => (
                <Link
                  key={post.slug}
                  href={`/writing/${post.slug}`}
                  className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 p-4 -mx-4 hover:bg-sand-100 transition-colors rounded-sm"
                >
                  {/* Extract just the month and day for the list view */}
                  <time className="font-mono text-sm text-sand-500 w-24 shrink-0">
                    {post.date.split(",")[0]}
                  </time>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-sand-900 group-hover:text-amber-700 transition-colors">
                      {post.title}
                    </h3>
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
    </main>
  );
}
