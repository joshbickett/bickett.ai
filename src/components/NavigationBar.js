import codingImg from "../assets/coding-4.png";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

export const NavigationBar = ({ active }) => {
  const pages = [
    { name: "my focus", url: "/" },
    { name: "projects", url: "/projects" },
    { name: "github", url: "https://github.com/joshbickett/" },
    { name: "writing", url: "/writing" },
  ];

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const navClick = (url) => {
    console.log(url);
    // if (url.includes("github")) {
    //   window.location.href = "https://github.com/joshbickett/";
    // } else {
    //   window.location.href = window.location.origin + url;
    // }
  };

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
      {!isMobile && (
        <div
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {pages.map((page) => {
            if (page.name === active) {
              return (
                <ActiveNavButton key={page.name}>{page.name}</ActiveNavButton>
              );
            } else {
              return (
                <NavButton key={page.name} onClick={() => navClick(page.url)}>
                  {page.name}
                </NavButton>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

const ActiveNavButton = styled.div`
  color: black;
  border-radius: 40%;
  padding: 10px;
  border: 1px solid black;
`;
const NavButton = styled.div`
  padding: 10px;
  border-radius: 40%;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`;
