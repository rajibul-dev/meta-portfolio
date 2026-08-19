const WORDS_PER_MINUTE = 200;

export function getReadingStats(content: string) {
  const text = content.trim();

  if (!text) {
    return {
      wordCount: 0,
      readingTime: 0,
    };
  }

  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

  return {
    wordCount,
    readingTime,
  };
}
