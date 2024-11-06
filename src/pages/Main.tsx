import styled from "styled-components";
import NotificationImage from "../assets/Notification.png";
import setting from "../assets/setting.png";
import MainPlantSection from "../components/main/MainPlantSection";
import MainReseSection from "../components/main/ReseSection";
import MainAiSection from "../components/main/AiSection";
import { HeaderLR } from "../components/common/HeaderLR";
import Title from "../components/common/Title";
import BestCellCarousel from "../components/main/BestSellCarousel";
import MagazineCarousel from "../components/main/MagazineCarousel";
import HostelSection from "../components/main/HostelSection";
import BestPlantCarousel from "../components/main/BestPlantCarousel";

export const Main = () => {
  return (
    <MainContainer>
      <HeaderLR title={"PLANT HOSTEL"} icons={[NotificationImage, setting]} />
      <Title title={"나의 반려식물"} />
      <MainPlantSection />
      <MainReseSection />
      <MainAiSection />
      <BestCellCarousel />
      <BestPlantCarousel />
      <MagazineCarousel />
      <HostelSection />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
