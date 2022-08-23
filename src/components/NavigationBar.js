import codingImg from "../assets/coding-4.png";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";

export const NavigationBar = ({ active, isMobile }) => {
  const [mobileExpand, setMobileExpand] = useState(false);
  const pages = [
    { name: "my focus", url: "/" },
    { name: "projects", url: "/projects" },
    { name: "github", url: "https://github.com/joshbickett/" },
    { name: "writing", url: "/writing" },
  ];

  const navClick = (url) => {
    console.log(url);
    if (url.includes("github")) {
      window.location.href = "https://github.com/joshbickett/";
    } else {
      window.location.href = window.location.origin + url;
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
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
      </div>
      {!isMobile && (
        <div
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "flex-end",
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
      {isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "20px",
          }}
        >
          {mobileExpand && (
            <div>
              {pages.map((page) => {
                if (page.name === active) {
                  return (
                    <ActiveNavButton key={page.name}>
                      {page.name}
                    </ActiveNavButton>
                  );
                } else {
                  return (
                    <NavButton
                      key={page.name}
                      onClick={() => navClick(page.url)}
                    >
                      {page.name}
                    </NavButton>
                  );
                }
              })}
            </div>
          )}
          {!mobileExpand && <CloseMenu onClick={() => setMobileExpand(true)} />}
          {mobileExpand && <OpenMenu onClick={() => setMobileExpand(false)} />}
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
  margin: 0 5px;
`;
const NavButton = styled.div`
  padding: 10px;
  border-radius: 40%;
  cursor: pointer;
  margin: 0 5px;
  border: 1px solid #f9f9f9;
  &:hover {
    border: 1px solid black;
  }
`;

const CloseMenu = styled(MenuIcon)`
  cursor: pointer;
  width: 30px;
  scale: 1.2;
  &:active {
    scale: 1.4;
  }
`;
const OpenMenu = styled(MenuOpenIcon)`
  cursor: pointer;
  scale: 1.2;
  &:active {
    scale: 1.4;
  }
`;
