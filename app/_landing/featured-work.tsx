import Link from "next/link";
import SectionHeading from "../_components/ui/section-heading";

const featuredWork = [
  { title: "Voccaria", category: "Case Study", href: "/projects" },
  {
    title: "Twitch Timestamp Grabber",
    category: "Case Study",
    href: "/projects",
  },
  { title: "High Quality VC", category: "Experiment", href: "/projects" },
];

export default function FeaturedWork() {
  return (
    <section className="py-12 primary-container">
      <SectionHeading>
        <SectionHeading.Heading>Featured Work</SectionHeading.Heading>
      </SectionHeading>

      <p className="mb-8 max-w-[68ch] text-sand-700 text-base leading-[1.7] hero-copy">
        From re-architecting legacy data pipelines to building real-time vocal
        resonance trackers, my projects span deep backend systems and
        exploratory frontend interfaces.
      </p>

      <div className="flex flex-col gap-3 mb-8">
        {featuredWork.map((work) => (
          <WorkListItem
            title={work.title}
            href={work.href}
            category={work.category}
            key={work.title}
          />
        ))}
      </div>
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
