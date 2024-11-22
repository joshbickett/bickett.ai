import { NavigationBar } from "../components/NavigationBar";
import memeImage from "../assets/meme.jpg";
import musicImage from "../assets/music.png";
import gaitImage from "../assets/gait-2.png";
import RobotImage from "../assets/robot.png";
import MysteriesImage from "../assets/mysteries.jpg";
import SelfOperatingComputerImage from "../assets/soc.png";
import { ContentContainer } from "../styles/pageStyles";
import {
  BigTileImages,
  PageContainer,
  MainContainer,
} from "../styles/pageStyles";
import { useEffect } from "react";
export const Blog = ({ isMobile }) => {
  useEffect(() => {
    document.title = "Projects";
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <PageContainer>
      <NavigationBar active={"Blog"} isMobile={isMobile} />

      <MainContainer style={{ maxWidth: "700px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "50px 0px",
          }}
        >
          <ContentContainer>
            <div>
              <h3>A year since the launch of Self-Operating Computer</h3>
              <p></p>
            </div>
          </ContentContainer>
        </div>
      </MainContainer>
    </PageContainer>
  );
};
