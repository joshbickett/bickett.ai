// Simple frontmatter parser for browser
const parseFrontmatter = (content) => {
  if (!content.startsWith("---")) {
    return { data: {}, content };
  }

  // Look for the closing --- on its own line
  const lines = content.split("\n");
  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) {
    return { data: {}, content };
  }

  const frontmatterLines = lines.slice(1, endIndex);
  const markdownLines = lines.slice(endIndex + 1);

  const data = {};
  frontmatterLines.forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line
        .slice(colonIndex + 1)
        .trim()
        .replace(/^["']|["']$/g, "");
      data[key] = value;
    }
  });

  return { data, content: markdownLines.join("\n") };
};

export const loadBlogPosts = async () => {
  try {
    // Fetch from the actual markdown file
    const response = await fetch('/blog/self-operating-computer-framework.md');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const content = await response.text();
    
    // Parse frontmatter and content
    const { data: frontmatter, content: markdown } = parseFrontmatter(content);
    
    const result = [
      {
        slug: "self-operating-computer-framework",
        frontmatter,
        content: markdown,
      },
    ];

    return result;
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
};

export const loadBlogPost = async (slug) => {
  try {
    const response = await fetch(`/blog/${slug}.md`);
    const content = await response.text();

    const { data: frontmatter, content: markdown } = parseFrontmatter(content);

    return {
      slug,
      frontmatter,
      content: markdown,
    };
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
};
