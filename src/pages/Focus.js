import "../App.css";

import focusImg from "../assets/web.png";

import { NavigationBar } from "../components/NavigationBar";

export const Focus = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <NavigationBar active={"my focus"} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            margin: "30px 0",
          }}
        >
          <div></div>

          {/* <div
            style={{ display: "flex", alignItems: "center", fontSize: "30px" }}
          >
            Many industries have potential in the next decade, but what I am
            most excited about is deep learning, AI, and software in general.
          </div>
          <img
            src={focusImg}
            alt="focus"
            style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
          /> */}
          <p
            style={{
              fontSize: "30px",
              width: "100%",
              textAlign: "center",
            }}
          >
            This page is still being worked on. More coming soon!
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};
