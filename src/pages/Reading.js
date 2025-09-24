import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import { MarkdownRenderer } from "../components/MarkdownRenderer";
import { loadReadingList } from "../utils/readingLoader";

export const Reading = ({ isMobile }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExplorerOpen, setExplorerOpen] = useState(!isMobile);

  useEffect(() => {
    document.title = "Reading Stack | JoshBickett.com";

    const fetchReadingList = async () => {
      try {
        const loaded = await loadReadingList();
        setItems(loaded);

        const firstReading = loaded.find((entry) => {
          const status = entry.frontmatter?.status?.toLowerCase();
          return status === "reading";
        });

        setSelectedItem(firstReading ?? loaded[0] ?? null);
      } catch (error) {
        console.error("Error loading reading list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReadingList();
  }, []);

  useEffect(() => {
    setExplorerOpen(!isMobile);
  }, [isMobile]);

  const { readingNow, pending, archived } = useMemo(() => {
    const formatted = items.map((item) => {
      const date = item.frontmatter?.date
        ? new Date(item.frontmatter.date)
        : null;
      const status = item.frontmatter?.status?.toLowerCase() ?? "";

      return {
        ...item,
        normalizedStatus: status,
        formattedDate: date
          ? date.toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "",
      };
    });

    return {
      readingNow: formatted.filter((item) => item.normalizedStatus === "reading"),
      pending: formatted.filter((item) => item.normalizedStatus === "pending"),
      archived: formatted.filter((item) =>
        !["reading", "pending"].includes(item.normalizedStatus)
      ),
    };
  }, [items]);

  const handleSelect = (item) => {
    setSelectedItem(item);
    if (isMobile) {
      setExplorerOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const listContent = (
    <>
      <SectionHeading>Currently Reading</SectionHeading>
      {readingNow.length === 0 ? (
        <EmptyState>Nothing in flight right now.</EmptyState>
      ) : (
        readingNow.map((item) => (
          <ListItem
            key={item.slug}
            onClick={() => handleSelect(item)}
            $isActive={selectedItem?.slug === item.slug}
          >
            <ItemTitle>{item.frontmatter.title}</ItemTitle>
            <ItemMeta>
              {item.formattedDate && <ItemDate>{item.formattedDate}</ItemDate>}
              {item.frontmatter.status && (
                <ItemStatus>{item.frontmatter.status}</ItemStatus>
              )}
            </ItemMeta>
          </ListItem>
        ))
      )}

      <ListDivider />

      <SectionHeading>Pending</SectionHeading>
      {pending.length === 0 ? (
        <EmptyState>The reading queue is empty.</EmptyState>
      ) : (
        pending.map((item) => (
          <ListItem
            key={item.slug}
            onClick={() => handleSelect(item)}
            $isActive={selectedItem?.slug === item.slug}
          >
            <ItemTitle>{item.frontmatter.title}</ItemTitle>
            <ItemMeta>
              {item.formattedDate && <ItemDate>{item.formattedDate}</ItemDate>}
              {item.frontmatter.status && (
                <ItemStatus>{item.frontmatter.status}</ItemStatus>
              )}
            </ItemMeta>
          </ListItem>
        ))
      )}

      {archived.length > 0 && <ListDivider />}

      {archived.length > 0 && <SectionHeading>Archived</SectionHeading>}
      {archived.length > 0 &&
        archived.map((item) => (
          <ListItem
            key={item.slug}
            onClick={() => handleSelect(item)}
            $isActive={selectedItem?.slug === item.slug}
          >
            <ItemTitle>{item.frontmatter.title}</ItemTitle>
            <ItemMeta>
              {item.formattedDate && <ItemDate>{item.formattedDate}</ItemDate>}
              {item.frontmatter.status && (
                <ItemStatus>{item.frontmatter.status}</ItemStatus>
              )}
            </ItemMeta>
          </ListItem>
        ))}
    </>
  );

  const detailSection = (
    <DetailPanel $isMobile={isMobile}>
      {selectedItem ? (
        <DetailContent>
          <DetailHeader>
            <DetailTitle>{selectedItem.frontmatter.title}</DetailTitle>
            <DetailMeta>
              {selectedItem.frontmatter.date && (
                <DetailMetaItem>
                  {new Date(
                    selectedItem.frontmatter.date
                  ).toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </DetailMetaItem>
              )}
              {selectedItem.frontmatter.status && (
                <DetailMetaItem>
                  Status: {selectedItem.frontmatter.status}
                </DetailMetaItem>
              )}
              {selectedItem.frontmatter.link && (
                <DetailMetaItem>
                  <a
                    href={selectedItem.frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open source
                  </a>
                </DetailMetaItem>
              )}
            </DetailMeta>
          </DetailHeader>
          <MarkdownRenderer content={selectedItem.content} />
        </DetailContent>
      ) : (
        <EmptyDetail>Select a reading note to view context.</EmptyDetail>
      )}
    </DetailPanel>
  );

  if (loading) {
    return (
      <PageContainer>
        <NavigationBar isMobile={isMobile}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/projects">Research & Projects</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/todos">Public TODOs</NavItem>
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
          <ExplorerShell>
            <LoadingMessage>Loading reading list…</LoadingMessage>
          </ExplorerShell>
        </MainContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <NavigationBar isMobile={isMobile}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/projects">Research & Projects</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/todos">Public TODOs</NavItem>
        <NavItem href="/reading" active>
          Reading
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
              {isExplorerOpen ? "Hide reading explorer" : "Browse reading list"}
            </MobileExplorerToggle>
            {isExplorerOpen && <MobileList>{listContent}</MobileList>}
            {detailSection}
          </MobileLayout>
        ) : (
          <ExplorerShell>
            <ListContainer>{listContent}</ListContainer>
            {detailSection}
          </ExplorerShell>
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
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 3rem 2rem 3rem 1.5rem;
    max-width: 1180px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    max-width: 100%;
  }
`;

const ExplorerShell = styled.div`
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

const ListContainer = styled.div`
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

const SectionHeading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #0f172a;
`;

const ListItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
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

const ItemTitle = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

const ItemMeta = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.85rem;
`;

const ItemDate = styled.span`
  color: inherit;
  opacity: 0.85;
`;

const ItemStatus = styled.span`
  background-color: rgba(14, 116, 144, 0.18);
  color: #0e7490;
  padding: 0.1rem 0.5rem;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
`;

const DetailPanel = styled.section`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
  padding: 2rem 3rem;
  min-height: 480px;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  ${({ $isMobile }) =>
    $isMobile &&
    `
      padding: 1rem;
      box-shadow: none;
      border-radius: 10px;
      overflow-x: hidden;
      overflow-y: auto;
      width: 100%;
      max-width: calc(100vw - 2rem);
    `}

  @media (max-width: 900px) {
    min-height: auto;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: calc(100% - 2rem);
    margin: 0 auto;
  }
`;

const DetailContent = styled.div`
  width: 100%;
  max-width: 800px;
  color: #1f2937;
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin: 0 auto;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;

    * {
      max-width: 100%;
      word-break: break-word;
      box-sizing: border-box;
    }

    pre {
      overflow-x: auto;
      max-width: calc(100vw - 4rem);
      white-space: pre-wrap;
      word-wrap: break-word;
      margin-left: -0.5rem;
      margin-right: -0.5rem;
      padding: 1rem 0.5rem;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    table {
      display: block;
      overflow-x: auto;
      max-width: 100%;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    li,
    blockquote {
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      max-width: 100%;
    }

    a {
      word-break: break-all;
      overflow-wrap: anywhere;
    }
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
`;

const DetailMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  color: #475569;
  font-size: 0.95rem;
`;

const DetailMetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  a {
    color: #2563eb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const EmptyState = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f8fafc;
  color: #64748b;
  font-size: 0.95rem;
`;

const ListDivider = styled.hr`
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 1.25rem 0 0.75rem 0;
`;

const EmptyDetail = styled.div`
  margin: auto;
  font-size: 1rem;
  color: #64748b;
`;

const LoadingMessage = styled.div`
  width: 100%;
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  color: #64748b;
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

const MobileLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-x: hidden;
  max-width: 100vw;
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

const MobileList = styled(ListContainer)`
  padding: 1rem;
  gap: 0.5rem;
  max-height: 60vh;
`;
