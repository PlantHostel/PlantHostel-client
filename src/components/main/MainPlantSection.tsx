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
    background: radial-gradient(
      39.6% 39.6% at 50% 50%,
      rgba(50, 50, 50, 0.4) 0%,
      rgba(152, 152, 152, 0.4) 100%
    );
    width: 326px;
    height: 146px;
  }
  .plant-script {
    top: 33%;
    position: absolute;
    color: white;
    font-family: "Pretendard-SemiBold";
  }
`;
