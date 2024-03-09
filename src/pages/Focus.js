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
        <InnerContainer>
          <ContentContainer>
            <ProfileImages src={webImage} />
            <ContentTextContainer>
              <h3>Agents</h3>
              <p>
                I am interested in AI agents that complete objectives. I
                recently created the{" "}
                <a href="https://github.com/OthersideAI/self-operating-computer">
                  Self-Operating Computer Framework.
                </a>
              </p>
            </ContentTextContainer>
          </ContentContainer>
          <ContentContainer>
            <ProfileImages src={startupImage} />
            <ContentTextContainer>
              <h3>Startups and Indie Hacking</h3>
              <p>
                I enjoy working on small teams and building software products
              </p>
            </ContentTextContainer>
          </ContentContainer>
          <ContentContainer>
            <ProfileImages src={scienceImg} />
            <ContentTextContainer>
              <h3>Deep learning</h3>
            </ContentTextContainer>
          </ContentContainer>
          {/* <ContentContainer>
            <ProfileImages src={scienceImg} />
            <ContentTextContainer>
              <h3>Operating Systems</h3>
            </ContentTextContainer>
          </ContentContainer> */}
          
        </InnerContainer>
        <a href="https://www.buymeacoffee.com/joshbickett" style={{ margin: "20px 0", fontSize: "10px"}}>buy me coffee to drink while working on projects</a>
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
