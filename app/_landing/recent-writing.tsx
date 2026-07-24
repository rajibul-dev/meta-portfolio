import Link from "next/link";
import SectionHeading from "../_components/ui/section-heading";
import Button from "../_components/ui/button";

const recentWriting = [
  {
    title: "The Parallels Between Refactoring Code and Vocal Technique",
    date: "Oct 12, 2025",
    excerpt:
      "How learning to place my voice changed the way I think about decoupling software modules.",
  },
  {
    title: "Why I Stopped Using Dashboards",
    date: "Sep 28, 2025",
    excerpt:
      "An essay on digital minimalism, intention, and building a text-first interface for my personal life.",
  },
  {
    title: "Navigating the Messy Middle of Learning",
    date: "Aug 05, 2025",
    excerpt:
      "Thoughts on embracing the plateau and finding joy in the microscopic improvements.",
  },
];

export default function RecentWriting() {
  return (
    <section className="py-16 primary-container">
      <SectionHeading>
        <SectionHeading.Heading>Recent Writing</SectionHeading.Heading>
        <SectionHeading.PageLink href="/writing">
          View All &rarr;
        </SectionHeading.PageLink>
      </SectionHeading>

      <div className="flex flex-col gap-8 max-xs3:gap-6">
        {recentWriting.map((post, i) => (
          <Link
            href="/writing"
            key={i}
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
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex md:justify-center mt-4">
        <Button href="/writing">Explore All Writing &rarr;</Button>
      </div>
    </section>
  );
}
