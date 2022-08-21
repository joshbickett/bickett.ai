import { NavigationBar } from "../components/NavigationBar";
export const Projects = ({ isMobile }) => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <NavigationBar active={"projects"} isMobile={isMobile} />
      </div>
    </div>
  );
};
