import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { MarkdownRenderer } from "../components/MarkdownRenderer";
import { loadBlogPost } from "../utils/blogLoader";

export const BlogPost = ({ isMobile }) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const upsertMetaTag = (name, content) => {
    if (!content) return;
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  const upsertLinkTag = (rel, href) => {
    if (!href) return;
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  };

  useEffect(() => {
    const buildDescription = (content = "") => {
      const condensed = content.replace(/\s+/g, " ").trim();
      return condensed.slice(0, 180);
    };

    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      const loadedPost = await loadBlogPost(slug);

      if (!loadedPost) {
        setError("not-found");
        setPost(null);
        document.title = "Blog post not found | JoshBickett.com";
        return;
      }

      setPost(loadedPost);
      const title = loadedPost.frontmatter?.title || slug;
      const canonicalUrl = `https://joshbickett.com/blog/${slug}`;
      const description =
        buildDescription(loadedPost.content) ||
        "Blog post on JoshBickett.com";

      document.title = `${title} | Blog | JoshBickett.com`;
      upsertMetaTag("description", description);
      upsertMetaTag("og:title", title);
      upsertMetaTag("og:description", description);
      upsertMetaTag("twitter:title", title);
      upsertMetaTag("twitter:description", description);
      upsertLinkTag("canonical", canonicalUrl);
    };

    fetchPost().finally(() => setLoading(false));
  }, [slug]);

  const formattedDate = post?.frontmatter?.date
    ? new Date(post.frontmatter.date).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <PageContainer>
      <NavigationBar isMobile={isMobile}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/projects">Research & Projects</NavItem>
        <NavItem active href="/blog">
          Blog
        </NavItem>
        <NavItem
          href="/#contact"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/#contact";
          }}
        >
          Contact
        </NavItem>
      </NavigationBar>

      <MainContainer>
        {loading ? (
          <StatusCard>Loading blog post…</StatusCard>
        ) : error ? (
          <StatusCard>
            <p>Sorry, we couldn't find that blog post.</p>
            <BackLink to="/blog">Back to blog</BackLink>
          </StatusCard>
        ) : (
          <ArticleContainer>
            <BackLink to="/blog">← Back to blog</BackLink>
            <ArticleHeader>
              <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
              {formattedDate && <ArticleMeta>{formattedDate}</ArticleMeta>}
            </ArticleHeader>
            <MarkdownRenderer content={post.content} />
          </ArticleContainer>
        )}
      </MainContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #333;
  background-color: #f9fafb;
  overflow-x: hidden;
  width: 100%;
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 3.5rem 1.75rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
    max-width: 1180px;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    width: 100%;
    max-width: 100%;
  }
`;

const NavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 2rem;
  background-color: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const NavItem = styled.a`
  padding: 0.4rem 0.25rem;
  color: ${(props) => (props.active ? "#1f2937" : "#64748b")};
  font-weight: ${(props) => (props.active ? "600" : "500")};
  text-decoration: none;
  border-bottom: 2px solid
    ${(props) => (props.active ? "#1f2937" : "transparent")};
  transition: color 0.2s ease, border-bottom-color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #1f2937;
    border-bottom-color: rgba(30, 41, 59, 0.4);
  }

  @media (max-width: 768px) {
    margin: 0.25rem 0;
  }
`;

const ArticleContainer = styled.article`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
  padding: 2.5rem 3rem;
  width: 100%;
  max-width: 960px;
  box-sizing: border-box;
  color: #1f2937;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    width: calc(100% - 1rem);
  }
`;

const ArticleHeader = styled.header`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;
`;

const ArticleTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ArticleMeta = styled.time`
  font-size: 0.95rem;
  color: #475569;
  font-weight: 500;
`;

const StatusCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
  padding: 2rem;
  width: 100%;
  max-width: 640px;
  text-align: center;
  color: #475569;
  line-height: 1.6;
`;

const BackLink = styled(RouterLink)`
  display: inline-block;
  margin-bottom: 1rem;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    color: #1d4ed8;
  }
`;
