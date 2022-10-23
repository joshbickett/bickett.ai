import codingImg from "../assets/coding-4.png";
import me from "../assets/me.png";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";

export const NavigationBar = ({ active, isMobile }) => {
  const [mobileExpand, setMobileExpand] = useState(false);
  const pages = [
    { name: "my focus", url: "/" },
    { name: "projects", url: "/projects" },

    { name: "writing", url: "/writing" },
    { name: "github", url: "https://github.com/joshbickett/" },
    { name: "twitter", url: "https://twitter.com/josh_bickett" },
  ];

  const navClick = (url) => {
    console.log(url);
    if (url.includes("github") || url.includes("twitter")) {
      window.location.href = url;
    } else {
      window.location.href = window.location.origin + url;
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr" }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={me}
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
            alignItems: "center",
            justifyContent: "flex-end",
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
            margin: "50px 10px",
          }}
        >
          <div>
            {mobileExpand && (
              <div
                style={{
                  fontSize: "25px",
                  backgroundColor: "white",
                  borderRadius: "25px",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
                  margin: "10px",
                }}
              >
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
                        style={{ borderColor: "white" }}
                      >
                        {page.name}
                      </NavButton>
                    );
                  }
                })}
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {!mobileExpand && (
              <CloseMenu onClick={() => setMobileExpand(true)} />
            )}
            {mobileExpand && (
              <OpenMenu onClick={() => setMobileExpand(false)} />
            )}
          </div>
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
