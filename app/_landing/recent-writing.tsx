import Link from "next/link";
import SectionHeading from "../_components/ui/section-heading";
import Button from "../_components/ui/button";
import { getCollection } from "../_lib/content";

export default async function RecentWriting() {
  const writing = await getCollection("writing");
  const recentWriting = writing.slice(0, 3);

  return (
    <section
      id="recent-writing"
      className="py-20 max-sm:py-16 primary-container"
    >
      <SectionHeading>
        <SectionHeading.Heading>Recent Writing</SectionHeading.Heading>
        {recentWriting.length > 0 && (
          <SectionHeading.PageLink href="/writing">
            View All →
          </SectionHeading.PageLink>
        )}
      </SectionHeading>

      {recentWriting.length === 0 ? (
        <p className="max-w-5xl text-md leading-[1.7] text-sand-700 max-md3:text-base max-xs3:leading-[1.6]">
          I haven't published anything here yet. When I have something I
          actually want to write about, I'll put it here.
        </p>
      ) : (
        <>
          <div className="flex flex-col gap-8 max-xs3:gap-6">
            {recentWriting.map((post) => (
              <Link
                href={`/writing/${post.slug}`}
                key={post.slug}
                className="group flex md:flex-row flex-col md:items-baseline gap-2 md:gap-12 pb-8 border-sand-200 last:border-0 border-b"
              >
                <time className="md:w-32 font-mono text-sand-500 text-sm shrink-0">
                  {post.date}
                </time>
                <div>
                  <h3 className="mb-2 font-medium text-sand-900 group-hover:text-sand-600 text-xl transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sand-600 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex md:justify-center mt-4">
            <Button href="/writing">Explore All Writing &rarr;</Button>
          </div>
        </>
      )}
    </section>
  );
}
