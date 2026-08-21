export type ContentType = "projects" | "writing" | "lab";

export type ContentFrontmatter = {
  title?: string;
  description?: string;
  date: string;

  published?: boolean;
  featured?: boolean;
  tags?: string[];
  coverImage?: string;

  startDate?: string;
  endDate?: string;

  liveUrl?: string;
  sourceUrl?: string;

  labType?: "music" | "code" | "reading" | "note";
  permalink?: boolean;
};

export type ContentItem = ContentFrontmatter & {
  slug: string;
  type: ContentType;
  readingTime: number;
  wordCount: number;
};

export type ContentDocument = {
  frontmatter: ContentFrontmatter;
  content: string;
  slug: string;
  type: ContentType;
  readingTime: number;
  wordCount: number;
};
