import MDXContent from "@/app/_components/mdx-content";
import { getContent } from "@/app/_lib/content";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getContent("writing", slug);

  return (
    <article className="max-w-205 mx-auto px-4 pt-16 pb-20">
      <Link
        href="/writing"
        className="inline-flex items-center gap-2 text-sm font-medium text-sand-500 hover:text-amber-700 mb-12 transition-colors group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to writing
      </Link>

      <header className="mb-10 border-b border-sand-200 pb-10">
        <div className="flex items-center gap-4 text-sm font-medium text-sand-500 font-mono uppercase tracking-wide mb-8">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          <span className="w-1 h-1 rounded-full bg-sand-300" />
          <span>{post.readingTime} min read</span>
        </div>

        <h1 className="font-serif text-6xl max-lg:text-5xl max-md:text-4xl text-sand-900 tracking-tight leading-tight mb-3">
          {post.frontmatter.title}
        </h1>

        <p className="text-2xl max-md:text-xl text-sand-600 font-serif leading-relaxed">
          {post.frontmatter.description}
        </p>
      </header>

      <MDXContent source={post.content} />
    </article>
  );
}
