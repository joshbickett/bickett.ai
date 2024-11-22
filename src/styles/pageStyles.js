import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%; // Default width for non-mobile devices
  gap: 20px;

  @media (max-width: 768px) {
    // Adjusts for devices with a screen width of 768px or less
    width: 80%; // Full width on mobile
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 760px) {
    width: 100%;
    gap: 10px;
  }
`;

export const NavigationBarContainer = styled.div`
  font-size: 15px;
  width: fit-content;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  @media (max-width: 760px) {
    width: 80%;
  }
`;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr; // Defines two columns, first wider than the second
  align-items: stretch; // Ensures that in mobile view, items also stretch if needed
  gap: 20px; // Space between columns
  width: 100%;
  border-bottom: 1px solid lightgray;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Stack into a single column on mobile
  }
`;

export const ContactSection = styled.div`
  box-sizing: border-box;
  border-left: 1px solid lightgray;
  @media (max-width: 768px) {
    border-left: None;
  }
`;

export const TileImages = styled.img`
  max-width: 100px;
  border-radius: 30px;
  margin: 10px;
  @media (max-width: 760px) {
    max-width: 75px;
  }
`;

export const BigTileImages = styled.img`
  max-width: 150px;
  border-radius: 30px;
  margin: 10px;
  @media (max-width: 760px) {
    max-width: 75px;
  }
`;
