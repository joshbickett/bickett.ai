import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { loadBlogPosts } from "../utils/blogLoader";
import { MarkdownRenderer } from "../components/MarkdownRenderer";

export const Blog = ({ isMobile }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExplorerOpen, setExplorerOpen] = useState(!isMobile);

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

  useEffect(() => {
    setExplorerOpen(!isMobile);
  }, [isMobile]);

  const handleSelectPost = (post) => {
    setSelectedPost(post);

    if (isMobile) {
      setExplorerOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const listContent =
    blogPosts.length === 0 ? (
      <EmptyState>No blog posts found right now.</EmptyState>
    ) : (
      blogPosts.map((post) => {
        const formattedDate = post.frontmatter.date
          ? new Date(post.frontmatter.date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
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
    );

  const detailSection = (
    <PostDetail $isMobile={isMobile}>
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
  );

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
        {isMobile ? (
          <MobileLayout>
            <MobileExplorerToggle
              type="button"
              onClick={() => setExplorerOpen((open) => !open)}
            >
              {isExplorerOpen ? "Hide post explorer" : "Browse blog posts"}
            </MobileExplorerToggle>
            {isExplorerOpen && (
              <MobilePostList>
                <ListHeading>Blog Posts</ListHeading>
                {listContent}
              </MobilePostList>
            )}
            {detailSection}
          </MobileLayout>
        ) : (
          <ExplorerContainer>
            <PostList>
              <ListHeading>Blog Posts</ListHeading>
              {listContent}
            </PostList>
            {detailSection}
          </ExplorerContainer>
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
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 3.5rem 3rem 3.5rem 1.75rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 3rem 2rem 3rem 1.5rem;
    max-width: 1180px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ExplorerContainer = styled.div`
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 3.25rem;
  width: 100%;
  align-items: flex-start;

  @media (max-width: 1200px) {
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 2rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PostList = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
  padding: 1.5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 80vh;
  overflow-y: auto;
  width: 100%;
  min-width: 240px;
  margin: 0;
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
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
  padding: 2rem;
  min-height: 480px;
  display: flex;
  width: 100%;
  overflow: hidden;

  ${({ $isMobile }) =>
    $isMobile &&
    `
      padding: 1.5rem;
      box-shadow: none;
      border-radius: 10px;
    `}

  @media (max-width: 900px) {
    min-height: auto;
  }
`;

const DetailContent = styled.div`
  width: 100%;
  color: #1f2937;
  overflow-wrap: anywhere;

  @media (min-width: 901px) {
    max-width: 720px;
    margin: 0;
  }

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

const MobileLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileExplorerToggle = styled.button`
  padding: 0.85rem 1.1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background-color: white;
  color: #1f2937;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: #eff6ff;
    border-color: #bfdbfe;
  }
`;

const MobilePostList = styled(PostList)`
  padding: 1rem;
  gap: 0.5rem;
  max-height: 60vh;
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
