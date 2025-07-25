import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

// If you haven't installed react-icons, run:
// npm install react-icons
// or
// yarn add react-icons
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

// Assets (replace with your actual paths)
import scienceImg from "../assets/science.png";
import webImage from "../assets/web2.png";
import startupImage from "../assets/startups.png";
import profileImage from "../assets/me.jpeg"; // Placeholder for profile image

export const About = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageContainer>
      <NavigationBar active="Home" isMobile={isMobile}>
        <NavItem active href="/">
          Home
        </NavItem>
        <NavItem href="https://indiepa.ge/bickett">Indie Hacking</NavItem>
        <NavItem href="/projects">Research & Projects</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="#contact" onClick={handleContactClick}>
          Contact
        </NavItem>
      </NavigationBar>

      <HeroSection>
        <HeroContent>
          <ProfileImage
            src={profileImage || "/placeholder.svg?height=150&width=150"}
            alt="Profile"
          />
          <HeroText>
            <Heading>Josh Bickett</Heading>
            <Subheading>Engineer building AI Agents</Subheading>
          </HeroText>
        </HeroContent>
      </HeroSection>

      <MainContainer>
        <Section>
          <SectionHeading>About Me</SectionHeading>
          <SectionContent>
            <p>
              I am the lead software engineer at OthersideAI where we build and
              scale AI products such as{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://www.hyperwriteai.com/"
              >
                HyperWrite
              </a>
              . Many nights and weekends, I{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://indiepa.ge/bickett"
              >
                indie hack
              </a>{" "}
              or work on{" "}
              <a style={{ textDecoration: "none" }} href="/projects">
                research & projects
              </a>
              .
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionHeading>Areas of Focus</SectionHeading>
          <ExpertiseGrid>
            <a
              href="https://www.hyperwriteai.com/"
              style={{ textDecoration: "none" }}
            >
              <ExpertiseCard>
                <ExpertiseIcon
                  src={webImage || "/placeholder.svg?height=80&width=80"}
                  alt="Web Development"
                />
                <ExpertiseTitle>OthersideAI</ExpertiseTitle>
                <ExpertiseDescription>
                  Full-stack development with a focus on AI-powered
                  applications.
                </ExpertiseDescription>
              </ExpertiseCard>
            </a>
            <a
              href="https://indiepa.ge/bickett"
              style={{ textDecoration: "none" }}
            >
              <ExpertiseCard>
                <ExpertiseIcon
                  src={startupImage || "/placeholder.svg?height=80&width=80"}
                  alt="Startups"
                />
                <ExpertiseTitle>Indie Hacking</ExpertiseTitle>
                <ExpertiseDescription>
                  I build, launch, and market side projects.
                </ExpertiseDescription>
              </ExpertiseCard>
            </a>
            <a href="/projects" style={{ textDecoration: "none" }}>
              <ExpertiseCard>
                <ExpertiseIcon
                  src={scienceImg || "/placeholder.svg?height=80&width=80"}
                  alt="Science"
                />
                <ExpertiseTitle>Research & Projects</ExpertiseTitle>
                <ExpertiseDescription>
                  I work on experiments, prototypes, and frameworks.
                </ExpertiseDescription>
              </ExpertiseCard>
            </a>
          </ExpertiseGrid>
        </Section>

        {/*
          Renamed section from "Get in Touch" to "Connect With Me"
          and moved social links here
        */}
        <Section id="contact">
          <SectionHeading>Connect With Me</SectionHeading>
          <SectionContent>
            <p>
              The easiest way to reach me is to message me on Twitter{" "}
              <Link href="https://twitter.com/josh_bickett">@josh_bickett</Link>
              .
            </p>
            <p>
              I'm open to discussing new projects, research collaborations, or
              interesting ideas at the intersection of technology and science.
            </p>
          </SectionContent>

          {/* Social links with icons */}
          <SocialLinks>
            <SocialIcon
              href="https://twitter.com/josh_bickett"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon
              href="https://github.com/joshbickett"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/josh-bickett-4219b166/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon
              href="https://www.youtube.com/@joshbickett"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </SocialIcon>
          </SocialLinks>
        </Section>
      </MainContainer>

      <Footer>
        <FooterContent>
          <FooterText>
            © {new Date().getFullYear()} Josh Bickett. All rights reserved.
          </FooterText>
          {/* Note: SocialLinks removed from footer */}
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
  align-items: center;
  max-width: 900px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 4px solid white;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const HeroText = styled.div`
  flex: 1;
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
  margin: 0 0 1rem 0;
  color: #64748b;
`;

const HeroParagraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #475569;
  margin: 0;
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

const SectionContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #475569;

  p {
    margin: 0 0 1.25rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Link = styled.a`
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExpertiseCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ExpertiseIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
`;

const ExpertiseTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #1e293b;
`;

const ExpertiseDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #475569;
  margin: 0;
`;

/* Footer */
const Footer = styled.footer`
  background-color: #1e293b;
  color: white;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #cbd5e1;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

/* Social Links in the new "Connect With Me" section */
const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  font-size: 1.75rem;
  color: #475569;
  transition: color 0.2s ease;

  &:hover {
    color: #2563eb;
  }
`;

export default About;
