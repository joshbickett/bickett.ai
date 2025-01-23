import "../App.css";
import styled from "@emotion/styled";

import scienceImg from "../assets/science.png";
import webImage from "../assets/web2.png";
import startupImage from "../assets/startups.png";

import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";
import { useMediaQuery } from "react-responsive";
import {
  MainContainer,
  PageContainer,
  ContentContainer,
  TileImages,
  AboutContainer,
  ContactSection,
} from "../styles/pageStyles";

export const About = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // create a random for 1 in 1000
  const notRandom = Math.floor(Math.random() * 1000);

  console.log("random", notRandom);

  return (
    <PageContainer>
      <NavigationBar active={"About"} isMobile={isMobile} />

      <MainContainer>
        <AboutContainer>
          <div style={{ padding: "5px 10px" }}>
            <h3>Welcome</h3>
            <p>
              Hello, I am a software engineer at{" "}
              <a href="https://www.hyperwriteai.com/">OthersideAI</a> building
              AI products and indiehacking on side projects on nights &
              weekends.
            </p>
          </div>
          <ContactSection>
            <h3>Reaching out</h3>
            <p>
              The easiest way to reach me is to message me on Twitter{" "}
              <a href="https://twitter.com/josh_bickett">@josh_bickett.</a> I am
              interested in research collaborations, feel free to reach out if
              you have an interesting project.
            </p>
          </ContactSection>
        </AboutContainer>
      </MainContainer>
      <Footer />
    </PageContainer>
  );
};

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 700px;
  @media (max-width: 760px) {
    align-items: center;
  }
`;

const ContentTextContainer = styled.div`
  @media (max-width: 760px) {
    max-width: 400px;
  }
`;
