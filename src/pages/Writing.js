import { NavigationBar } from "../components/NavigationBar";
export const Writing = ({ isMobile }) => {
  return (
    <div>
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <NavigationBar active={"writing"} isMobile={isMobile} />
      </div>
    </div>
  );
};
