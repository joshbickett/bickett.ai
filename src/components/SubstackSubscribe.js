import React, { useState } from "react";
import styled from "@emotion/styled";

export const SubstackSubscribe = () => {
  const [showWidget, setShowWidget] = useState(false);

  const handleSubscribeClick = (e) => {
    e.preventDefault();
    setShowWidget(true);
  };

  return (
    <Section>
      <SectionHeading>Subscribe to My Writing</SectionHeading>
      {!showWidget ? (
        <SectionContent>
          <p>
            Get insights about AI agents, cost-compute trends, exponential
            growth, and the future of technology delivered to your inbox.
          </p>
          <p>
            <Link href="#" onClick={handleSubscribeClick}>
              Subscribe to my Substack newsletter
            </Link>{" "}
            to stay updated on my latest research and thoughts.
          </p>
        </SectionContent>
      ) : (
        <WidgetContainer>
          <iframe
            src="https://silence.substack.com/embed"
            width="100%"
            height="320"
            style={{
              border: "1px solid #e5e7eb",
              background: "white",
              borderRadius: "8px",
            }}
            frameBorder="0"
            scrolling="no"
            title="Substack Subscribe Widget"
          />
          <BackButton onClick={() => setShowWidget(false)}>← Back</BackButton>
        </WidgetContainer>
      )}
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  margin-bottom: 4rem;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
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

const WidgetContainer = styled.div`
  position: relative;
`;

const BackButton = styled.button`
  background-color: #f8fafc;
  color: #2563eb;
  border: 1px solid #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f1f5f9;
    border-color: #cbd5e1;
  }
`;

export default SubstackSubscribe;
