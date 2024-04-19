
import styled from "@emotion/styled";


export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%; // Default width for non-mobile devices
  gap: 20px;

  @media (max-width: 768px) { // Adjusts for devices with a screen width of 768px or less
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



export const TileImages = styled.img`
  max-width: 100px;
  border-radius: 30px;
  margin: 10px;
`;