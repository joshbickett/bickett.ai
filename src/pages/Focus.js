import "../App.css";
import styled from "@emotion/styled";

import scienceImg from "../assets/science.png";
import webImage from "../assets/web2.png";
import startupImage from "../assets/startups.png";

import { NavigationBar } from "../components/NavigationBar";
import { useMediaQuery } from "react-responsive";

export const Focus = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // create a random for 1 in 1000
  const notRandom = Math.floor(Math.random() * 1000);

  console.log("random", notRandom);

  return (
    <div style={{ width: "100%" }}>
      <NavigationBar active={"my focus"} isMobile={isMobile} />
      <MainContainer>
        <FocusContainer>
          <h2>FOCUS</h2>
          <div
            style={{
              textAlign: "center",
              fontSize: "30px",
              margin: "0 20px",
            }}
          >
            Hello, I am a software engineer currently working at{" "}
            <a href="https://othersideai.com/">OthersideAI</a> and exploring
            through side projects.
          </div>
        </FocusContainer>

        <ContentContainer>
          <ProfileImages src={webImage} alt="writing" />
          <div style={{ maxWidth: "600px" }}>
            <h3>The Web</h3>
            <p>
              I am building web applications that leverage AI. Currently I'm
              working on an agent that can complete actions on the web.
            </p>
          </div>
        </ContentContainer>
        <ContentContainer>
          <ProfileImages src={startupImage} alt="writing" />
          <div style={{ maxWidth: "600px" }}>
            <h3>Startups</h3>
            <p>
              I enjoy working on small teams. I am interested in building useful
              things that scale.
            </p>
          </div>
        </ContentContainer>
        <ContentContainer>
          <ProfileImages src={scienceImg} alt="focus" />
          <div>
            <h3>Deep learning and AI</h3>
            <p>I am beginner</p>
          </div>
        </ContentContainer>
      </MainContainer>
    </div>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 40px;
  max-width: 500px;
  @media (max-width: 760px) {
    flex-direction: column;
    text-align: center;
    margin: 0 10px;
  }
`;

const FocusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
`;

const ProfileImages = styled.img`
  max-width: 150px;
  border-radius: 30px;
  margin: 10px;
`;
