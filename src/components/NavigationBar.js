import codingImg from "../assets/coding.png";
import styled from "@emotion/styled";

export const NavigationBar = ({ active }) => {
  const options = ["my focus", "projects", "github", "writing"];

  return (
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
        {options.map((option) => {
          if (option === active) {
            return <ActiveNavButton key={option}>{option}</ActiveNavButton>;
          } else {
            return <NavButton key={option}>{option}</NavButton>;
          }
        })}
      </div>
    </div>
  );
};

const ActiveNavButton = styled.div`
  background-color: white;
  color: black;
  border-radius: 40%;
  padding: 10px;
`;
const NavButton = styled.div`
  padding: 10px;
`;
