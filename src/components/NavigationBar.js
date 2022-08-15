export const NavigationBar = () => {
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
  );
};
