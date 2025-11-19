import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { loadBlogPosts } from "../utils/blogLoader";

export const Blog = ({ isMobile }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog | JoshBickett.com";

    const loadPosts = async () => {
      try {
        const posts = await loadBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <PageContainer>
      <NavigationBar active="Blog" isMobile={isMobile}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/projects">Research & Projects</NavItem>
        <NavItem active href="/blog">
          Blog
        </NavItem>
        <NavItem
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/#contact";
          }}
        >
          Contact
        </NavItem>
      </NavigationBar>

      <MainContainer>
        <PageHeader>
          <PageTitle>Blog Posts</PageTitle>
          <PageSubhead>
            Reverse-chronological index of my short-form writings (including
            off-site).
          </PageSubhead>
        </PageHeader>

        {loading ? (
          <LoadingMessage>Loading blog posts…</LoadingMessage>
        ) : blogPosts.length === 0 ? (
          <EmptyState>No blog posts found right now.</EmptyState>
        ) : (
          <PostList>
            {blogPosts.map((post) => {
              const formattedDate = post.frontmatter.date
                ? new Date(post.frontmatter.date).toLocaleDateString(
                    undefined,
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )
                : null;

              return (
                <PostListItem key={post.slug}>
                  <PostTitle>
                    <PostLink to={`/blog/${post.slug}`}>
                      {post.frontmatter.title}
                    </PostLink>
                  </PostTitle>
                  {formattedDate && <PostMeta>{formattedDate}</PostMeta>}
                </PostListItem>
              );
            })}
          </PostList>
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
  max-width: 100vw;
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 3.5rem 3rem 3.5rem 1.75rem;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 3rem 2rem 3rem 1.5rem;
    max-width: 900px;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    width: 100%;
    max-width: 100%;
  }
`;

const PageHeader = styled.header`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const PageSubhead = styled.p`
  margin: 0;
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
`;

const PostList = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: 100%;
  box-sizing: border-box;
`;

const PostListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  padding: 0.6rem 0.4rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(37, 99, 235, 0.05);
  }
`;

const PostTitle = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

const PostMeta = styled.time`
  font-size: 0.95rem;
  color: #475569;
`;

const PostLink = styled(RouterLink)`
  color: #1f2937;
  text-decoration: none;

  &:hover {
    color: #2563eb;
    text-decoration: underline;
  }
`;

const EmptyState = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f8fafc;
  color: #64748b;
  font-size: 0.95rem;
`;

const LoadingMessage = styled.div`
  width: 100%;
  text-align: center;
  padding: 3rem;
  color: #64748b;
`;

// Navigation components matching About page
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
