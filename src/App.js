import logo from "./logo.svg";
import "./App.css";
import codingImg from "./assets/coding.png";
import focusImg from "./assets/web.png";
import styled from "@emotion/styled";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={codingImg}
              alt="coding"
              style={{ width: "100px", borderRadius: "50%", margin: "10px" }}
            />
            <div
              style={{
                fontSize: "30px",
              }}
            >
              Josh Bickett
            </div>
          </div>
          <div
            style={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <ActiveNavButton
              style={{ backgroundColor: "#724CDB", borderRadius: "40%" }}
            >
              my focus
            </ActiveNavButton>
            <NavButton>projects</NavButton>
            <NavButton>github</NavButton>
            <NavButton>writing</NavButton>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr 1fr",
            margin: "30px 0",
          }}
        >
          <div></div>

          <div
            style={{ display: "flex", alignItems: "center", fontSize: "30px" }}
          >
            Many industries have potential in the next decade, but what I am
            most excited about is deep learning, AI, and software in general.
          </div>
          <img
            src={focusImg}
            alt="focus"
            style={{ width: "200px", borderRadius: "30px", margin: "10px" }}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;

const ActiveNavButton = styled.div`
  background-color: #724cdb;
  border-radius: 40%;
  padding: 10px;
`;
const NavButton = styled.div`
  padding: 10px;
`;
