import codingImg from "../assets/coding-4.png";
import me from "../assets/me.png";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";
import { NavigationBarContainer } from "../styles/pageStyles";

export const NavigationBar = ({ active, isMobile }) => {
  const [mobileExpand, setMobileExpand] = useState(false);
  const pages = [
    { name: "About", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Blog", url: "/blog" },
    // { name: "GitHub", url: "https://github.com/joshbickett/" },
    // { name: "Twitter", url: "https://twitter.com/josh_bickett" },
    // {
    //   name: "youtube",
    //   url: "https://www.youtube.com/channel/UC_GSUTfPfsjcWFg4GBjAnmw",
    // },
  ];

  const navClick = (url) => {
    console.log(url);
    if (
      url.includes("github") ||
      url.includes("twitter") ||
      url.includes("youtube")
    ) {
      window.location.href = url;
    } else {
      window.location.href = window.location.origin + url;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <img
            src={me}
            alt="me"
            style={{ width: "60px", borderRadius: "50%", margin: "10px" }}
          /> */}
          <div
            style={{
              fontSize: "25px",
              padding: "10px",
            }}
          >
            Josh Bickett
          </div>
        </div>
      </div>

      <NavigationBarContainer>
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
      </NavigationBarContainer>
    </div>
  );
};

const ActiveNavButton = styled.div`
  color: black;
  padding: 10px;
  font-weight: bold;
`;
// add underline when hovered
const NavButton = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseMenu = styled(MenuIcon)`
  cursor: pointer;
  scale: 1.4;
  &:active {
    scale: 1.6;
  }
`;
const OpenMenu = styled(MenuOpenIcon)`
  cursor: pointer;
  scale: 1.4;
  &:active {
    scale: 1.6;
  }
`;
