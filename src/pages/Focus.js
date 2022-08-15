import "../App.css";
import codingImg from "../assets/coding.png";
import focusImg from "../assets/web.png";
import styled from "@emotion/styled";
import { NavigationBar } from "../components/NavigationBar";

function Focus() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <NavigationBar />
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

export default Focus;

const ActiveNavButton = styled.div`
  background-color: #724cdb;
  border-radius: 40%;
  padding: 10px;
`;
const NavButton = styled.div`
  padding: 10px;
`;
