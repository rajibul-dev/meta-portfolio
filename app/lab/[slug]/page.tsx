import { getContent } from "@/app/_lib/content";

export default async function LabPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getContent("lab", slug);

  return (
    <article>
      <h1>{post.frontmatter.title}</h1>

      <p>{post.frontmatter.description}</p>

      <p>{post.frontmatter.date}</p>

      <pre>{post.content}</pre>
    </article>
  );
}
