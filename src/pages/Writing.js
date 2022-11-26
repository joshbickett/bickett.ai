import { NavigationBar } from "../components/NavigationBar";
export const Writing = ({ isMobile }) => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <NavigationBar active={"writing"} isMobile={isMobile} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "50px 200px",
          }}
        >
          <div style={{ textAlign: "center", fontSize: "30px" }}>
            COMING NOT SO SOON...
          </div>
        </div>
      </div>
    </div>
  );
};
