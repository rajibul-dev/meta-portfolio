import MDXContent from "@/app/_components/mdx-content";
import { getContent } from "@/app/_lib/content";
import { buildContentMetadata } from "@/app/_lib/seo";
import type { Metadata } from "next";
import { ArrowLeft, BookOpen, Code, FileText, Music } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type LabType = "music" | "code" | "reading" | "note";

const icons = {
  music: Music,
  code: Code,
  reading: BookOpen,
  note: FileText,
} satisfies Record<LabType, typeof Music>;

const labels: Record<LabType, string> = {
  music: "Music",
  code: "Code",
  reading: "Reading",
  note: "Note",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getContent("lab", slug);
    const labType: LabType = post.frontmatter.labType ?? "note";
    const label = labels[labType];

    return buildContentMetadata({
      title: `Lab Note: ${label}`,
      description: post.frontmatter.description,
      content: post.content,
      path: `/lab/${slug}`,
      image: post.frontmatter.coverImage,
      date: post.frontmatter.date,
      published: post.frontmatter.published,
    });
  } catch {
    return {};
  }
}

export default async function LabPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;

  try {
    post = await getContent("lab", slug);
  } catch {
    notFound();
  }

  const labType: LabType = post.frontmatter.labType ?? "note";
  const Icon = icons[labType];
  const label = labels[labType];

  return (
    <article className="mx-auto max-w-205 px-4 pt-16 pb-20">
      <Link
        href="/lab"
        className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-sand-500 transition-colors hover:text-amber-700"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        Back to lab
      </Link>

      <header className="mb-10 border-b border-sand-200 pb-10">
        <div className="mb-8 flex items-center gap-4 font-mono text-sm font-medium uppercase tracking-wide text-sand-500">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 bg-sand-100 text-sand-600">
            <Icon className="h-4 w-4" />
          </div>

          <time dateTime={post.frontmatter.date}>
            {post.frontmatter.date}
          </time>
        </div>

        <h1 className="font-serif text-5xl leading-tight tracking-tight text-sand-900 max-md:text-4xl">
          Lab Note: {label}
        </h1>
      </header>

      <MDXContent source={post.content} />
    </article>
  );
}
