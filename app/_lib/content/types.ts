export type ContentType = "projects" | "writing" | "lab";

export type ContentFrontmatter = {
  title: string;
  description: string;
  date: string;
  published?: boolean;
  tags?: string[];
  coverImage?: string;
};

export type ContentItem = ContentFrontmatter & {
  slug: string;
  type: ContentType;
  readTime?: string;
};

export type ContentDocument = {
  frontmatter: ContentFrontmatter;
  content: string;
  slug: string;
  type: ContentType;
};
