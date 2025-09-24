import { About } from "./pages/About";
import { Projects } from "./pages/Projects";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import { Domains } from "./pages/Domains";
import { Blog } from "./pages/Blog";
import { Todos } from "./pages/Todos";

export const App = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // if domain is joshbickett.com redirect to bickett.com

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About isMobile={isMobile} />}></Route>
        <Route
          path="/projects"
          element={<Projects isMobile={isMobile} />}
        ></Route>
        <Route path="/blog" element={<Blog isMobile={isMobile} />}></Route>
        <Route path="/todos" element={<Todos isMobile={isMobile} />}></Route>
        <Route
          path="*"
          element={
            <div style={{ padding: "150px", marginTop: "250px" }}>
              <p>There's nothing here!</p>
            </div>
          }
        />
        <Route path="/domains" element={<Domains />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
