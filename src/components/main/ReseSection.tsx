import styled from "styled-components";

export default function MainReseSection() {
  return (
    <ReseSection>
      <button className="rese-option">
        <img src="../src/assets/calender-front-color.png" alt="" />
        <span className="rese-label">병원 예약</span>
      </button>
      <button className="rese-option">
        <img src="../src/assets/travel-front-color.png" alt="" />
        <span className="rese-label">호텔 예약</span>
      </button>
    </ReseSection>
  );
}

const ReseSection = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  .rese-option {
    box-sizing: content-box;
    padding: 17px 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 169px;
    gap: 12px;
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    border: none;
  }

  .rese-label {
    font-family: "Pretendard-SemiBold";
    font-size: 16px;
  }
`;
