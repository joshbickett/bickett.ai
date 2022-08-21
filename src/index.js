import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Focus } from "./pages/Focus";
import { Projects } from "./pages/Projects";
import { Writing } from "./pages/Writing";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Focus isMobile={isMobile} />}></Route>
      <Route
        path="/projects"
        element={<Projects isMobile={isMobile} />}
      ></Route>
      <Route path="/writing" element={<Writing isMobile={isMobile} />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
