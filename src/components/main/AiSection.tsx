import styled from "styled-components";

export default function MainAiSection() {
  return (
    <AiSection>
      <div className="ai-wrap">
        <div className="ai-img">
          <img src="../src/assets/computer.png" alt="" />
        </div>
        <div className="ai-script">
          <div className="ai-title">
            나에게 꼭 맞는
            <br /> 식물 파트너는 ?
          </div>
          <div className="ai-tip">
            AI 진단을 통해 여러분에게
            <br /> 꼭 맞는 반려식물을 분양하세요!
          </div>
        </div>
      </div>
    </AiSection>
  );
}

const AiSection = styled.div`
  height: 150px;
  background-color: #30a766;
  border-radius: 12px;
  letter-spacing: -2.5%;
  .ai-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .ai-script {
    color: white;
  }
  .ai-title {
    font-size: 20px;
    font-family: "Pretendard-SemiBold";
    line-height: 28px;
    margin-bottom: 4px;
  }
  .ai-tip {
    font-size: 14px;
    line-height: 20px;
  }
`;
