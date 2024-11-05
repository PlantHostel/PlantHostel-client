import styled from "styled-components";
import Title from "../common/Title";
import map from "../../assets/map-pin-dynamic-color.png";

export default function HostelSection() {
  return (
    <>
      <Title title="가까운 호스텔존 찾기" />
      <AiSection>
        <div className="ai-wrap">
          <div className="ai-script">
            <div className="ai-title">
              나의 반려식물
              <br /> 가까운 곳에서 케어받자!
            </div>
            <div className="ai-tip">
              가장 가까운 호스텔존을 찾아
              <br /> 안전하게 케어 받으세요!
            </div>
          </div>
          <div className="ai-img">
            <img src={map} alt="" />
          </div>
        </div>
      </AiSection>
    </>
  );
}

const AiSection = styled.div`
  background-color: #b9dae8;
  border-radius: 12px;
  padding: 28px 20px;
  .ai-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9.4px;
  }
  .ai-title {
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    margin-bottom: 4px;
  }
  .ai-tip {
    font-size: 14px;
  }
`;
