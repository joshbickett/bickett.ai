import { parseFrontmatter } from "./markdown";

export const loadBlogPosts = async () => {
  const blogPosts = [];
  const posts = [
    "selecting_a_model_based_on_stripe_conversion.md",
    "1000-for-brain-2025.md",
    "self-operating-computer-framework.md",
    "older-medium-posts.md",
  ];

  try {
    for (const postFile of posts) {
      const response = await fetch(`/blog/${postFile}`);

      if (!response.ok) {
        console.warn(`Failed to load ${postFile}: ${response.status}`);
        continue;
      }

      const content = await response.text();
      const { data: frontmatter, content: markdown } =
        parseFrontmatter(content);

      blogPosts.push({
        slug: postFile.replace(".md", ""),
        frontmatter,
        content: markdown,
      });
    }

    // Sort posts by date (newest first)
    blogPosts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB - dateA;
    });

    return blogPosts;
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
};

export const loadBlogPost = async (slug) => {
  try {
    const response = await fetch(`/blog/${slug}.md`);
    if (!response.ok) {
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
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
};
