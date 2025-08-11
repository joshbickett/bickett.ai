import styled from "@emotion/styled";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { FaStar } from "react-icons/fa"; // Import star icon

// Project images
import memeImage from "../assets/meme.jpg";
import musicImage from "../assets/music.png";
import gaitImage from "../assets/gait-2.png";
import RobotImage from "../assets/robot.png";
import MysteriesImage from "../assets/mysteries.jpg";
import SelfOperatingComputerImage from "../assets/soc.png";

export const Projects = ({ isMobile }) => {
  const isMobileDevice = useMediaQuery({ query: `(max-width: 768px)` });
  isMobile = isMobile || isMobileDevice;

  useEffect(() => {
    document.title = "Projects";
  }, []);

  // Navigate to About page with hash for lazy scrolling
  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = "/#contact";
  };

  return (
    <PageContainer>
      <NavigationBar active="Projects" isMobile={isMobile}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="https://indiepa.ge/bickett">Indie Hacking</NavItem>
        <NavItem active href="/projects">
          Research & Projects
        </NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="#contact" onClick={handleContactClick}>
          Contact
        </NavItem>
      </NavigationBar>

      <HeroSection>
        <HeroContent>
          <Heading>Research & Projects</Heading>
          <Subheading>
            Below are my experiments, prototypes, and frameworks.
          </Subheading>
        </HeroContent>
      </HeroSection>

      <MainContainer>
        <Section>
          <SectionHeading>Featured Projects</SectionHeading>
          <ProjectsGrid>
            <a
              href="https://github.com/OthersideAI/self-operating-computer"
              style={{ textDecoration: "none" }}
            >
              <ProjectCard>
                <ProjectTitle>
                  The Self-Operating Computer Framework
                </ProjectTitle>
                <ProjectDescription>
                  A framework enabling multimodal models to operate computers
                  similarly to humans.
                </ProjectDescription>
                <StarCount>
                  <StarIcon />
                  <span>9500</span>
                </StarCount>
              </ProjectCard>
            </a>
            <a
              href="https://github.com/joshbickett/multimodal-gamer"
              style={{ textDecoration: "none" }}
            >
              <ProjectCard>
                <ProjectTitle>Multimodal Gamer</ProjectTitle>
                <ProjectDescription>
                  A framework to enable multimodal models to play games on a
                  computer.
                </ProjectDescription>
                <StarCount>
                  <StarIcon />
                  <span>98</span>
                </StarCount>
              </ProjectCard>
            </a>
            <a
              href="https://cookbook.openai.com/examples/stripe_model_eval/selecting_a_model_based_on_stripe_conversion"
              style={{ textDecoration: "none" }}
            >
              <ProjectCard>
                <ProjectTitle>Stripe Model Evaluation</ProjectTitle>
                <ProjectDescription>
                  OpenAI Cookbook post demonstrating how to select a model based on Stripe conversion data.
                </ProjectDescription>
              </ProjectCard>
            </a>
          </ProjectsGrid>
        </Section>
      </MainContainer>

      <Footer>
        <FooterContent>
          <FooterText>
            © {new Date().getFullYear()} Josh Bickett. All rights reserved.
          </FooterText>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
};

// Styled Components

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #333;
  background-color: #f9fafb;
`;

const NavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
  }
`;

const NavItem = styled.a`
  margin: 0 1.5rem;
  padding: 0.5rem 0;
  color: ${(props) => (props.active ? "#2563eb" : "#64748b")};
  font-weight: ${(props) => (props.active ? "600" : "500")};
  text-decoration: none;
  border-bottom: 2px solid
    ${(props) => (props.active ? "#2563eb" : "transparent")};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #2563eb;
    border-bottom-color: #2563eb;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #1e293b;
`;

const Subheading = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  color: #64748b;
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeading = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  color: #1e293b;
  position: relative;
  padding-bottom: 0.75rem;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #2563eb;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
`;

const ProjectDescription = styled.p`
  font-size: 1.125rem;
  color: #475569;
  margin: 0;
  flex: 1;
`;

const StarCount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: #facc15; /* Golden color for stars */
  font-weight: 500;
  font-size: 1rem;
`;

const StarIcon = styled(FaStar)`
  margin-right: 0.5rem;
`;

const Footer = styled.footer`
  background-color: #1e293b;
  color: white;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #cbd5e1;
`;

export default Projects;
