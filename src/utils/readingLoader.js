import { parseFrontmatter } from "./markdown";

const READING_FILES = [
  "swe-bench-pro.md",
  "founder-market-fit-syhw.md",
];

export const loadReadingList = async () => {
  const items = [];

  for (const readingFile of READING_FILES) {
    try {
      const response = await fetch(`/reading/${readingFile}`);

      if (!response.ok) {
        console.warn(`Failed to load reading item ${readingFile}: ${response.status}`);
        continue;
      }

      const content = await response.text();
      const { data: frontmatter, content: markdown } = parseFrontmatter(content);

      items.push({
        slug: readingFile.replace(".md", ""),
        frontmatter,
        content: markdown,
      });
    } catch (error) {
      console.error(`Error fetching reading item ${readingFile}:`, error);
    }
  }

  items.sort((a, b) => {
    const dateA = new Date(a.frontmatter?.date || "");
    const dateB = new Date(b.frontmatter?.date || "");
    return dateB - dateA;
  });

  return items;
};

export const loadReadingItem = async (slug) => {
  try {
    const response = await fetch(`/reading/${slug}.md`);

    if (!response.ok) {
      console.warn(`Failed to load reading item ${slug}: ${response.status}`);
      return null;
    }

    const content = await response.text();
    const { data: frontmatter, content: markdown } = parseFrontmatter(content);

    return {
      slug,
      frontmatter,
      content: markdown,
    };
  } catch (error) {
    console.error(`Error loading reading item ${slug}:`, error);
    return null;
  }
};
