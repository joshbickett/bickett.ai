import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { loadBlogPosts } from "../utils/blogLoader";
import { MarkdownRenderer } from "../components/MarkdownRenderer";

export const Blog = ({ isMobile }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog | JoshBickett.com";

    const loadPosts = async () => {
      try {
        const posts = await loadBlogPosts();
        setBlogPosts(posts);
        setSelectedPost(posts[0] ?? null);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const handleSelectPost = (post) => {
    setSelectedPost(post);

    if (isMobile) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading) {
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
          <ExplorerContainer>
            <PostList>
              <LoadingMessage>Loading blog posts…</LoadingMessage>
            </PostList>
            <PostDetail>
              <EmptyDetail>Preparing posts for you.</EmptyDetail>
            </PostDetail>
          </ExplorerContainer>
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
        <ExplorerContainer>
          <PostList>
            <ListHeading>Blog Posts</ListHeading>
            {blogPosts.length === 0 ? (
              <EmptyState>No blog posts found right now.</EmptyState>
            ) : (
              blogPosts.map((post) => {
                const formattedDate = post.frontmatter.date
                  ? new Date(post.frontmatter.date).toLocaleDateString(
                      undefined,
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )
                  : "";

                return (
                  <PostListItem
                    key={post.slug}
                    onClick={() => handleSelectPost(post)}
                    $isActive={selectedPost?.slug === post.slug}
                  >
                    <PostTitle>{post.frontmatter.title}</PostTitle>
                    {formattedDate && <PostMeta>{formattedDate}</PostMeta>}
                  </PostListItem>
                );
              })
            )}
          </PostList>
          <PostDetail>
            {selectedPost ? (
              <DetailContent>
                <DetailHeader>
                  <DetailTitle>{selectedPost.frontmatter.title}</DetailTitle>
                  {selectedPost.frontmatter.date && (
                    <DetailMeta>
                      {new Date(selectedPost.frontmatter.date).toLocaleDateString(
                        undefined,
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </DetailMeta>
                  )}
                </DetailHeader>
                <MarkdownRenderer content={selectedPost.content} />
              </DetailContent>
            ) : (
              <EmptyDetail>Select a post to start reading.</EmptyDetail>
            )}
          </PostDetail>
        </ExplorerContainer>
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

const ExplorerContainer = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PostList = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  padding: 1.5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ListHeading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #0f172a;
`;

const PostListItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  padding: 0.9rem;
  border-radius: 8px;
  border: none;
  background-color: ${({ $isActive }) =>
    $isActive ? "#2563eb" : "transparent"};
  color: ${({ $isActive }) => ($isActive ? "#f8fafc" : "#1f2937")};
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  text-align: left;

  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? "#2563eb" : "rgba(37, 99, 235, 0.08)"};
    transform: translateX(3px);
  }
`;

const PostTitle = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

const PostMeta = styled.time`
  font-size: 0.85rem;
  color: inherit;
  opacity: 0.8;
`;

const PostDetail = styled.section`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  padding: 2rem;
  min-height: 480px;
  display: flex;

  @media (max-width: 900px) {
    min-height: auto;
  }
`;

const DetailContent = styled.div`
  width: 100%;
  color: #1f2937;

  .markdown-content {
    line-height: 1.7;
  }
`;

const DetailHeader = styled.header`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;
`;

const DetailTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DetailMeta = styled.time`
  font-size: 0.95rem;
  color: #475569;
  font-weight: 500;
`;

const EmptyState = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f8fafc;
  color: #64748b;
  font-size: 0.95rem;
`;

const EmptyDetail = styled.div`
  margin: auto;
  font-size: 1rem;
  color: #64748b;
  text-align: center;
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
