import styled from "styled-components";
import { CommonButton } from "../common/CommonButton";

export default function MainPlantSection() {
  return (
    <PlantSection>
      <div className="plant-wrap"></div>
      <div className="plant-script">로그인 후 이용이 가능합니다</div>
      <CommonButton text="로그인" size="main" />
    </PlantSection>
  );
}

const PlantSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin-bottom: 20px;
  gap: 12px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  .plant-wrap {
    width: 326px;
    height: 146px;
    filter: blur(2px);
    background-color: gray;
  }
  .plant-script {
    position: absolute;
    top: 35%;
    color: white;
  }
`;
