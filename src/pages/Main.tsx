import styled from "styled-components";
import { Header } from "../components/common/Header";
import MainPlantSection from "../components/main/MainPlantSection";
import MainReseSection from "../components/main/ReseSection";
import MainAiSection from "../components/main/AiSection";

export const Main = () => {
  return (
    <MainContainer>
      <Header
        left={"PLANT HOSTEL"}
        title={""}
        right={
          <ButtonWrap>
            <button className="header-button">
              <img src="../src/assets/notification.png" />
            </button>
            <button className="header-button">
              <img src="../src/assets/setting.png" />
            </button>
          </ButtonWrap>
        }
      />
      <span className="header-title">나의 반려식물</span>
      <MainPlantSection></MainPlantSection>
      <MainReseSection></MainReseSection>
      <MainAiSection></MainAiSection>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .header-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;

  .header-button {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
`;
