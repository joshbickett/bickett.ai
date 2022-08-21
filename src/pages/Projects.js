import { NavigationBar } from "../components/NavigationBar";
export const Projects = ({ isMobile }) => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <NavigationBar active={"projects"} isMobile={isMobile} />
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
    </div>
  );
};
