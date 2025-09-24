import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

const markdownComponents = {
  h1: ({ children }) => <MarkdownH1>{children}</MarkdownH1>,
  h2: ({ children }) => <MarkdownH2>{children}</MarkdownH2>,
  h3: ({ children }) => <MarkdownH3>{children}</MarkdownH3>,
  p: ({ children }) => <MarkdownP>{children}</MarkdownP>,
  a: ({ href, children }) => <MarkdownLink href={href}>{children}</MarkdownLink>,
  code: ({ children }) => <MarkdownCode>{children}</MarkdownCode>,
  pre: ({ children }) => <MarkdownPre>{children}</MarkdownPre>,
  ul: ({ children }) => <MarkdownUl>{children}</MarkdownUl>,
  li: ({ children }) => <MarkdownLi>{children}</MarkdownLi>,
  blockquote: ({ children }) => <MarkdownBlockquote>{children}</MarkdownBlockquote>,
  strong: ({ children }) => <MarkdownStrong>{children}</MarkdownStrong>,
};

export const MarkdownRenderer = ({ content }) => {
  return <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>;
};

const MarkdownH1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 2.5rem 0 1.5rem 0;
  color: #1e293b;
  line-height: 1.3;

  &:first-of-type {
    margin-top: 0;
  }
`;

const MarkdownH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
  color: #1e293b;
  position: relative;
  padding-bottom: 0.5rem;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: #2563eb;
  }
`;

const MarkdownH3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem 0;
  color: #1e293b;
`;

const MarkdownP = styled.p`
  margin: 1.25rem 0;
  font-size: 1.125rem;
  line-height: 1.7;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const MarkdownLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
`;

const MarkdownCode = styled.code`
  background-color: #f1f5f9;
  color: #e11d48;
  padding: 0.25rem 0.375rem;
  border-radius: 4px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.875em;
`;

const MarkdownPre = styled.pre`
  background-color: #1e293b;
  color: #f1f5f9;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.875rem;
  line-height: 1.6;

  code {
    background-color: transparent;
    color: inherit;
    padding: 0;
    border-radius: 0;
  }
`;

const MarkdownUl = styled.ul`
  margin: 1.25rem 0;
  padding-left: 1.5rem;
`;

const MarkdownLi = styled.li`
  margin: 0.5rem 0;
  line-height: 1.6;
`;

const MarkdownBlockquote = styled.blockquote`
  border-left: 4px solid #2563eb;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  background-color: #f8fafc;
  font-style: italic;
  color: #475569;

  p {
    margin: 0;
  }
`;

const MarkdownStrong = styled.strong`
  font-weight: 600;
  color: #1e293b;
`;
