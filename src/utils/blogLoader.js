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
  const blogPosts = [];
  const posts = [
    '1000-for-brain-2025.md',
    'self-operating-computer-framework.md'
  ];

  try {
    for (const postFile of posts) {
      const response = await fetch(`/blog/${postFile}`);
      
      if (!response.ok) {
        console.warn(`Failed to load ${postFile}: ${response.status}`);
        continue;
      }
      
      const content = await response.text();
      const { data: frontmatter, content: markdown } = parseFrontmatter(content);
      
      blogPosts.push({
        slug: postFile.replace('.md', ''),
        frontmatter,
        content: markdown,
      });
    }

    return blogPosts;
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
