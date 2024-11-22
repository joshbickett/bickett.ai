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
          <div>
            <h3
              style={{
                padding: "10px 0",
                margin: 0,
              }}
            >
              Welcome
            </h3>
            <p
              style={{
                fontSize: "15px",
                padding: 0,
                margin: 0,
              }}
            >
              Hello, I am a software engineer at{" "}
              <a href="https://www.hyperwriteai.com/">HyperWrite</a> building
              LLM-based writing tools. In addition, we've explored the
              automation of web tasks with an{" "}
              <a href="https://venturebeat.com/ai/hyperwrite-unveils-breakthrough-ai-agent-that-can-surf-the-web-like-a-human/">
                AI agent
              </a>
              .
              <br />
              <br />
              On the side, I am currently exploring VLMs' ability to{" "}
              <a href="https://venturebeat.com/ai/the-self-operating-computer-emerges/">
                operate computers
              </a>{" "}
              and{" "}
              <a href="https://www.youtube.com/watch?v=9Znt4dMAB7U">
                play games
              </a>
              .
              <br />
              <br />I am finishing up the{" "}
              <a href="https://www.coursera.org/specializations/deep-learning?utm_medium=sem&utm_source=gg&utm_campaign=B2C_NAMER_deep-learning_deeplearning-ai_FTCOF_specializations_country-US-country-CA&campaignid=904733485&adgroupid=148411448815&device=c&keyword=&matchtype=&network=g&devicemodel=&adposition=&creativeid=654837734383&hide_mobile_promo&gad_source=1&gclid=CjwKCAjwrIixBhBbEiwACEqDJStkVMyMnnK8stellg5b7pdrCHPCNjwlcL-zDA6YR2CVSgLo2rXPghoC6d8QAvD_BwE">
                Deep Learning Specialization
              </a>{" "}
              through <a href="https://www.deeplearning.ai/">DeepLearning.ai</a>{" "}
              and I am interested in collaborating on research projects
              exploring VLMs' ability to reason and play games.
            </p>
          </div>
          <ContactSection>
            <h3
              style={{
                padding: !isMobile ? "10px" : "10px 0",
                margin: 0,
              }}
            >
              Reaching out
            </h3>
            <p
              style={{
                padding: !isMobile ? "0 10px" : "0",
                margin: 0,
              }}
            >
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
