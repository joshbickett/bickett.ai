import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { loadBlogPosts } from "../utils/blogLoader";
import { MarkdownRenderer } from "../components/MarkdownRenderer";

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

  if (loading) {
    return (
      <PageContainer>
        <NavigationBar active="Blog" isMobile={isMobile}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/projects">Research & Projects</NavItem>
          <NavItem active href="/blog">
            Blog
          </NavItem>
          <NavItem href="/">Contact</NavItem>
        </NavigationBar>
        <MainContainer>
          <BlogContent>
            <LoadingMessage>Loading...</LoadingMessage>
          </BlogContent>
        </MainContainer>
      </PageContainer>
    );
  }

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
        <BlogContent>
          {blogPosts.length === 0 ? (
            <NoBlogPosts>
              <h2>No blog posts found</h2>
              <p>Check back soon for new content!</p>
            </NoBlogPosts>
          ) : (
            blogPosts.map((post) => (
              <BlogPostContainer key={post.slug}>
                <BlogPostHeader>
                  <BlogPostTitle>{post.frontmatter.title}</BlogPostTitle>
                  <BlogPostDate>{post.frontmatter.date}</BlogPostDate>
                </BlogPostHeader>
                <BlogPostContent>
                  <MarkdownRenderer content={post.content} />
                </BlogPostContent>
              </BlogPostContainer>
            ))
          )}
        </BlogContent>
      </MainContainer>
    </PageContainer>
  );
};

// Styled Components matching the About page style
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #333;
  background-color: #f9fafb;
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const BlogContent = styled.div`
  width: 100%;
  max-width: 800px;
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.125rem;
  color: #64748b;
  padding: 2rem;
`;

const NoBlogPosts = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  p {
    color: #64748b;
    font-size: 1.125rem;
  }
`;

const BlogPostContainer = styled.article`
  background-color: white;
  border-radius: 8px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
  }
`;

const BlogPostHeader = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const BlogPostTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #1e293b;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const BlogPostDate = styled.time`
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
`;

const BlogPostContent = styled.div`
  line-height: 1.7;
  color: #374151;
`;

// Navigation components matching About page
const NavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
  }
`;

const NavItem = styled.a`
  margin: 0 1.5rem;
  padding: 0.5rem 0;
  color: ${(props) => (props.active ? "#2563eb" : "#64748b")};
  font-weight: ${(props) => (props.active ? "600" : "500")};
  text-decoration: none;
  border-bottom: 2px solid
    ${(props) => (props.active ? "#2563eb" : "transparent")};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #2563eb;
    border-bottom-color: #2563eb;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;
