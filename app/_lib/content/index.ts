import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { contentDirectories } from "./config";
import type {
  ContentDocument,
  ContentFrontmatter,
  ContentItem,
  ContentType,
} from "./types";

const CONTENT_DIR = path.join(process.cwd(), "app/_content");

function getCollectionPath(type: ContentType) {
  return path.join(CONTENT_DIR, contentDirectories[type]);
}

export async function getCollection(type: ContentType): Promise<ContentItem[]> {
  const directory = getCollectionPath(type);

  const fileNames = await fs.readdir(directory);

  const items: ContentItem[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".mdx")) continue;

    const filePath = path.join(directory, fileName);
    const rawContent = await fs.readFile(filePath, "utf8");

    const { data } = matter(rawContent);

    const frontmatter = data as ContentFrontmatter;

    items.push({
      ...frontmatter,
      slug: fileName.replace(/\.mdx$/, ""),
      type,
    });
  }

  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getContent(
  type: ContentType,
  slug: string,
): Promise<ContentDocument> {
  const filePath = path.join(getCollectionPath(type), `${slug}.mdx`);

  const rawContent = await fs.readFile(filePath, "utf8");

  const { data, content } = matter(rawContent);

  return {
    frontmatter: data as ContentFrontmatter,
    content,
    slug,
    type,
  };
}

export async function getAllContent(): Promise<ContentItem[]> {
  const collections = await Promise.all([
    getCollection("projects"),
    getCollection("writing"),
    getCollection("lab"),
  ]);

  return collections
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
