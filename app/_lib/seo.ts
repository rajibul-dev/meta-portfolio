import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!configuredSiteUrl && process.env.NODE_ENV === "production") {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be set in production for correct SEO URLs.",
  );
}

export const SITE_URL = new URL(
  configuredSiteUrl ?? "http://localhost:3000",
);

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

function cleanText(text: string) {
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_~`>#-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function getContentDescription(
  description: string | undefined,
  content: string,
) {
  if (description?.trim()) {
    return description.trim();
  }

  const blocks = content
    .replace(/^\s*{\s*\/\*[\s\S]*?\*\/\s*}\s*/g, "")
    .split(/\n\s*\n/)
    .map((block) => cleanText(block))
    .filter(
      (block) =>
        block &&
        !block.startsWith("#") &&
        !block.startsWith("```"),
    );

  const firstParagraph = blocks[0] ?? "A note from Rajibul Islam.";

  return firstParagraph.length > 160
    ? `${firstParagraph.slice(0, 157).trimEnd()}...`
    : firstParagraph;
}

type ContentMetadataOptions = {
  title: string;
  description?: string;
  content: string;
  path: string;
  image?: string;
  date?: string;
  published?: boolean;
};

export function buildContentMetadata({
  title,
  description,
  content,
  path,
  image = "/images/rajibul-islam.jpg",
  date,
  published = true,
}: ContentMetadataOptions): Metadata {
  const resolvedDescription = getContentDescription(
    description,
    content,
  );

  const imageUrl = absoluteUrl(image);
  const canonicalUrl = absoluteUrl(path);

  return {
    title,
    description: resolvedDescription,
    authors: [{ name: "Rajibul Islam" }],
    alternates: {
      canonical: canonicalUrl,
    },
    robots:
      published === false
        ? {
            index: false,
            follow: false,
          }
        : {
            index: true,
            follow: true,
          },
    openGraph: {
      type: "article",
      title,
      description: resolvedDescription,
      url: canonicalUrl,
      siteName: "Raji ラジ",
      locale: "en_IN",
      ...(date ? { publishedTime: date } : {}),
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: resolvedDescription,
      images: [imageUrl],
    },
  };
}
