export const parseFrontmatter = (content) => {
  if (!content.startsWith("---")) {
    return { data: {}, content };
  }

  const lines = content.split("\n");
  let endIndex = -1;

  for (let i = 1; i < lines.length; i += 1) {
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
