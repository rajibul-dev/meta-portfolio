import MDXContent from "@/app/_components/mdx-content";
import { getContent } from "@/app/_lib/content";
import { buildContentMetadata } from "@/app/_lib/seo";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getContent("projects", slug);
    const { frontmatter } = post;

    return buildContentMetadata({
      title: frontmatter.title ?? "Project",
      description: frontmatter.description,
      content: post.content,
      path: `/projects/${slug}`,
      image: frontmatter.coverImage,
      date: frontmatter.date,
      published: frontmatter.published,
    });
  } catch {
    return {};
  }
}

export default async function ProjectPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;

  try {
    post = await getContent("projects", slug);
  } catch {
    notFound();
  }

  const { frontmatter } = post;

  return (
    <article className="primary-container pt-16 pb-20">
      {/* Back navigation */}
      <Link
        href="/projects"
        className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-sand-500 transition-colors hover:text-amber-700"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        Back to projects
      </Link>

      {/* Semi-root container */}
      <div>
        {/* Project header */}
        <header className="mb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-sm font-medium uppercase tracking-wider text-sand-500">
            <time dateTime={frontmatter.date}>{frontmatter.date}</time>
            {frontmatter.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-3"
              >
                <span className="h-1 w-1 rounded-full bg-sand-300" />
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-7xl max-lg:text-6xl max-md:text-5xl max-w-[28ch] leading-tight tracking-tight text-sand-900">
            {frontmatter.title}
          </h1>
          <p className="font-serif text-2xl max-md:text-xl leading-relaxed text-sand-600 max-w-[80ch]">
            {frontmatter.description}
          </p>
        </header>
        {/* Optional project cover */}
        {frontmatter.coverImage ? (
          <figure className="mb-16 overflow-hidden border border-sand-300 bg-sand-200 p-2 shadow-sm">
            <Image
              width={1200}
              height={675}
              src={frontmatter.coverImage}
              alt={frontmatter.title || "Project cover image"}
              className="aspect-video h-auto w-full object-cover"
            />
          </figure>
        ) : (
          <div className="mb-16 h-px bg-sand-200" />
        )}
        {/* Project content */}
        <div className="grid grid-cols-12 max-md:grid-cols-1 gap-12">
          {/* Useful project context */}
          <aside className="self-start sticky top-24 col-span-2 max-md:static max-md:col-span-1 mt-2.5 text-sm text-sand-600">
            <div className="flex flex-col gap-6 max-md:flex-row max-md:gap-8">
              {(frontmatter.liveUrl || frontmatter.sourceUrl) && (
                <div>
                  <h2 className="mb-2 max-md:text-sm font-mono text-xs font-medium uppercase tracking-wide text-sand-900">
                    Links
                  </h2>
                  <div className="space-y-1.5">
                    {frontmatter.liveUrl && (
                      <a
                        href={frontmatter.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group max-md:text-base flex items-center gap-1.5 font-medium text-amber-700 transition-colors hover:text-sand-900"
                      >
                        Live project
                        <ExternalLink
                          size={14}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    )}
                    {frontmatter.sourceUrl && (
                      <a
                        href={frontmatter.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group max-md:text-base flex items-center gap-1.5 font-medium text-amber-700 transition-colors hover:text-sand-900"
                      >
                        Source code
                        <ExternalLink
                          size={14}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>
              )}
              {(frontmatter.startDate || frontmatter.endDate) && (
                <div>
                  <h2 className="mb-2 max-md:text-sm font-mono text-xs font-medium uppercase tracking-wide text-sand-900">
                    Timeline
                  </h2>
                  <div className="space-y-1.5">
                    {frontmatter.startDate && (
                      <p className="max-md:text-base">
                        Started{" "}
                        <time dateTime={frontmatter.startDate}>
                          {frontmatter.startDate}
                        </time>
                      </p>
                    )}
                    {frontmatter.endDate && (
                      <p className="max-md:text-base">
                        Finished{" "}
                        <time dateTime={frontmatter.endDate}>
                          {frontmatter.endDate}
                        </time>
                      </p>
                    )}
                    {!frontmatter.endDate && frontmatter.startDate && (
                      <p className="text-sand-400">Ongoing</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>
          {/* MDX */}
          <div className="col-span-9 min-w-0 max-w-200 max-md:col-span-1">
            <MDXContent source={post.content} />
          </div>
        </div>
      </div>
    </article>
  );
}
