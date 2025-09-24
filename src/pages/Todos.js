import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import { MarkdownRenderer } from "../components/MarkdownRenderer";
import { loadTodos } from "../utils/todoLoader";

export const Todos = ({ isMobile }) => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExplorerOpen, setExplorerOpen] = useState(!isMobile);

  useEffect(() => {
    document.title = "Public TODOs | JoshBickett.com";

    const fetchTodos = async () => {
      try {
        const loadedTodos = await loadTodos();
        setTodos(loadedTodos);

        const firstActive = loadedTodos.find((todo) => {
          const status = todo.frontmatter?.status?.toLowerCase();
          return status !== "done";
        });

        setSelectedTodo(firstActive ?? loadedTodos[0] ?? null);
      } catch (error) {
        console.error("Error loading todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    setExplorerOpen(!isMobile);
  }, [isMobile]);

  const { activeTodos, doneTodos } = useMemo(() => {
    const formatted = todos.map((todo) => {
      const date = todo.frontmatter?.date
        ? new Date(todo.frontmatter.date)
        : null;
      const status = todo.frontmatter?.status?.toLowerCase() ?? "";

      return {
        ...todo,
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

    const active = formatted.filter((todo) => todo.normalizedStatus !== "done");
    const done = formatted.filter((todo) => todo.normalizedStatus === "done");

    return { activeTodos: active, doneTodos: done };
  }, [todos]);

  const handleSelectTodo = (todo) => {
    setSelectedTodo(todo);
    if (isMobile) {
      setExplorerOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const listContent = (
    <>
      <ListHeading>Active TODOs</ListHeading>
      {activeTodos.length === 0 ? (
        <EmptyState>No active todos right now.</EmptyState>
      ) : (
        activeTodos.map((todo) => (
          <TodoListItem
            key={todo.slug}
            onClick={() => handleSelectTodo(todo)}
            $isActive={selectedTodo?.slug === todo.slug}
            $isDone={false}
          >
            <TodoItemTitle>{todo.frontmatter.title}</TodoItemTitle>
            <TodoItemMeta>
              {todo.formattedDate && <TodoDate>{todo.formattedDate}</TodoDate>}
              {todo.frontmatter.status && (
                <TodoStatus>{todo.frontmatter.status}</TodoStatus>
              )}
            </TodoItemMeta>
          </TodoListItem>
        ))
      )}

      {doneTodos.length > 0 && <ListDivider />}

      {doneTodos.length > 0 && <ListHeading>Done</ListHeading>}
      {doneTodos.length > 0 &&
        doneTodos.map((todo) => (
          <TodoListItem
            key={todo.slug}
            onClick={() => handleSelectTodo(todo)}
            $isActive={selectedTodo?.slug === todo.slug}
            $isDone
          >
            <TodoItemTitle>{todo.frontmatter.title}</TodoItemTitle>
            <TodoItemMeta>
              {todo.formattedDate && <TodoDate>{todo.formattedDate}</TodoDate>}
              {todo.frontmatter.status && (
                <TodoStatus>{todo.frontmatter.status}</TodoStatus>
              )}
            </TodoItemMeta>
          </TodoListItem>
        ))}
    </>
  );

  const detailSection = (
    <TodoDetail $isMobile={isMobile}>
      {selectedTodo ? (
        <DetailContent>
          <DetailHeader>
            <DetailTitle>{selectedTodo.frontmatter.title}</DetailTitle>
            <DetailMeta>
              {selectedTodo.frontmatter.date && (
                <DetailMetaItem>
                  {new Date(
                    selectedTodo.frontmatter.date
                  ).toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </DetailMetaItem>
              )}
              {selectedTodo.frontmatter.status && (
                <DetailMetaItem>
                  Status: {selectedTodo.frontmatter.status}
                </DetailMetaItem>
              )}
            </DetailMeta>
          </DetailHeader>
          <MarkdownRenderer content={selectedTodo.content} />
        </DetailContent>
      ) : (
        <EmptyDetail>Select a todo to view details.</EmptyDetail>
      )}
    </TodoDetail>
  );

  if (loading) {
    return (
      <PageContainer>
        <NavigationBar isMobile={isMobile}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/projects">Research & Projects</NavItem>
          <NavItem href="/blog">Blog</NavItem>
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
            <LoadingMessage>Loading todos…</LoadingMessage>
          </ExplorerContainer>
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
              {isExplorerOpen ? "Hide todo explorer" : "Browse todos"}
            </MobileExplorerToggle>
            {isExplorerOpen && (
              <MobileTodoList>{listContent}</MobileTodoList>
            )}

            {detailSection}
          </MobileLayout>
        ) : (
          <ExplorerContainer>
            <TodoList>{listContent}</TodoList>
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

const TodoList = styled.div`
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

const TodoListItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
  padding: 0.9rem;
  border-radius: 8px;
  border: none;
  background-color: ${({ $isActive }) =>
    $isActive ? "#2563eb" : "transparent"};
  color: ${({ $isActive, $isDone }) => {
    if ($isActive) return "#f8fafc";
    if ($isDone) return "#64748b";
    return "#1f2937";
  }};
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  text-align: left;

  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? "#2563eb" : "rgba(37, 99, 235, 0.08)"};
    transform: translateX(3px);
  }
`;

const TodoItemTitle = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

const TodoItemMeta = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.85rem;
`;

const TodoDate = styled.span`
  color: inherit;
  opacity: 0.85;
`;

const TodoStatus = styled.span`
  background-color: rgba(15, 118, 110, 0.15);
  color: #0f766e;
  padding: 0.1rem 0.5rem;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
`;

const TodoDetail = styled.section`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
  padding: 2rem 3rem;
  min-height: 480px;
  display: flex;
  justify-content: center;
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
    padding: 2rem;
  }
`;

const DetailContent = styled.div`
  width: 100%;
  max-width: 800px;
  color: #1f2937;
  overflow-wrap: anywhere;
  margin: 0 auto;
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

const MobileTodoList = styled(TodoList)`
  padding: 1rem;
  gap: 0.5rem;
  max-height: 60vh;
`;
