import Link from "next/link";
import PageHeading from "../_components/ui/page-heading";

export const articles = [
  {
    id: "learning-how-to-sing",
    title: "What Distributed Systems Taught Me About Singing",
    date: "May 12, 2024",
    readTime: "6 min read",
    excerpt:
      "At first glance, vocal pedagogy and software architecture have nothing in common. But both are about managing tension, flow, and graceful degradation.",
    content: "Content pending...",
  },
  {
    id: "the-builder-mindset",
    title: "The Builder's Mindset: When to Stop Planning",
    date: "January 28, 2024",
    readTime: "8 min read",
    excerpt:
      "Analysis paralysis is the enemy of the polymath. How I learned to start building before I felt 'ready'.",
    content: "Content pending...",
  },
  {
    id: "why-i-build-useless-things",
    title: "In Defense of Useless Projects",
    date: "November 03, 2023",
    readTime: "5 min read",
    excerpt:
      "Not everything needs an ROI. Sometimes, building something just to see if you can is the best way to learn.",
    content: "Content pending...",
  },
];

export default function Writing() {
  // Group articles by year
  const groupedPosts = articles.reduce(
    (acc, article) => {
      // Extract year from date string (e.g., "May 12, 2024" -> "2024")
      const year = article.date.split(", ")[1] || "2024";
      if (!acc[year]) acc[year] = [];
      acc[year].push(article);
      return acc;
    },
    {} as Record<string, typeof articles>,
  );

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
                  key={post.id}
                  href={`/writing/${post.id}`}
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
                  <span className="font-mono text-xs text-sand-400 hidden md:block">
                    {post.readTime}
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
