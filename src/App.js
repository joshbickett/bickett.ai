import { Focus } from "./pages/Focus";
import { Projects } from "./pages/Projects";
import { Writing } from "./pages/Writing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

export const App = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // if domain is joshbickett.com redirect to bickett.com

  useEffect(() => {
    if (
      window.location.hostname === "joshbickett.com" ||
      window.location.hostname === "www.joshbickett.com"
    ) {
      window.location.replace("https://bickett.com");
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Focus isMobile={isMobile} />}></Route>
        <Route
          path="/projects"
          element={<Projects isMobile={isMobile} />}
        ></Route>
        <Route
          path="/writing"
          element={<Writing isMobile={isMobile} />}
        ></Route>
        <Route
          path="*"
          element={
            <div style={{ padding: "150px", marginTop: "250px" }}>
              <p>There's nothing here!</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
