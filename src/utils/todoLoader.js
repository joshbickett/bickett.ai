import { parseFrontmatter } from "./markdown";

const TODO_FILES = [
  "codespaces-terminal-mvp.md",
  "gemini-cli-contribution-push.md",
  "share-open-agent-showcase.md",
  "publish-public-todos.md",
];

export const loadTodos = async () => {
  const todos = [];

  try {
    for (const todoFile of TODO_FILES) {
      const response = await fetch(`/todos/${todoFile}`);

      if (!response.ok) {
        console.warn(`Failed to load todo ${todoFile}: ${response.status}`);
        continue;
      }

      const content = await response.text();
      const { data: frontmatter, content: markdown } =
        parseFrontmatter(content);

      todos.push({
        slug: todoFile.replace(".md", ""),
        frontmatter,
        content: markdown,
      });
    }

    todos.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB - dateA;
    });

    return todos;
  } catch (error) {
    console.error("Error loading todos:", error);
    return [];
  }
};

export const loadTodo = async (slug) => {
  try {
    const response = await fetch(`/todos/${slug}.md`);

    if (!response.ok) {
      console.warn(`Failed to load todo ${slug}: ${response.status}`);
      return null;
    }

    const content = await response.text();
    const { data: frontmatter, content: markdown } =
      parseFrontmatter(content);

    return {
      slug,
      frontmatter,
      content: markdown,
    };
  } catch (error) {
    console.error(`Error loading todo ${slug}:`, error);
    return null;
  }
};
