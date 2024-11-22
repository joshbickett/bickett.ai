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
              <h2>
                A year since the launch of Self-Operating Computer Framework
              </h2>
              <p>
                November 3rd, 2023 I pushed the “initial commit”. The goal of
                the project? Create the first framework to enable multimodal
                models to operate computers as humans, do with mouse and
                keyboard.{" "}
              </p>
              <h4>The background</h4>
              <p>
                LLaVA-1.5 was released in October. Matt Shumer hosted the model
                and shared me an endpoint. I started hacking around with it. Our
                team had experimented with LLM and web agents for some time and
                we were excited about the potential of multimodal agents. We
                knew that GPT-4-vision-preview was on the horizon.
              </p>
              <p>...in progress</p>
            </div>
          </ContentContainer>
        </div>
      </MainContainer>
    </PageContainer>
  );
};
