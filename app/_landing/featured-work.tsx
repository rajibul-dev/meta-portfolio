import Link from "next/link";
import SectionHeading from "../_components/ui/section-heading";
import Button from "../_components/ui/button";
import QuoteAttention from "../_components/ui/quote-attention";
import { getCollection } from "../_lib/content";

export default async function FeaturedWork() {
  const projects = await getCollection("projects");

  const fetchSelectedProjects = projects.slice(0, 3);

  return (
    <section className="py-20 max-sm:py-16 primary-container">
      <SectionHeading>
        <SectionHeading.Heading>Featured Work</SectionHeading.Heading>
      </SectionHeading>

      <p className="mb-8 max-w-[68ch] text-sand-700 text-md leading-[1.7]">
        A selection of projects I've built, from client work to personal
        projects and experiments.
      </p>

      <div className="flex flex-col gap-3 mb-9">
        {fetchSelectedProjects.map((project) => (
          <WorkListItem
            title={project.title || "Untitled Project"}
            href={`/projects/${project.slug}`}
            category={project.tags?.[0] ?? "Case Study"}
            key={project.slug}
          />
        ))}
      </div>
      <Button href="/projects">Explore All Projects &rarr;</Button>

      {/* Lab Signal */}
      <QuoteAttention>
        <p className="mb-1 text-sand-600 text-base max-xs2:leading-relaxed">
          Looking for raw experiments and unpolished ideas?
        </p>
        <Button
          variant="link"
          href="/lab"
        >
          Peek into the lab &rarr;
        </Button>
      </QuoteAttention>
    </section>
  );
}

function WorkListItem({
  href,
  title,
  category,
}: {
  href: string;
  title: string;
  category: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 w-fit text-sand-900 hover:text-amber-700 transition-colors"
    >
      <span className="font-medium">{title}</span>
      <span className="max-xs2:hidden inline-block bg-sand-300 group-hover:bg-amber-700/50 w-8 h-px transition-colors"></span>
      <span className="inline-block font-mono text-sand-500 text-xs">
        {category}
      </span>
    </Link>
  );
}
