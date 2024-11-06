import styled from "styled-components";
import Title from "../common/Title";
import map from "../../assets/map-pin-dynamic-color.png";

export default function MainHostelSection() {
  return (
    <HostelSection>
      <div className="title-wrap">
        <Title title="가까운 호스텔존 찾기" />
        <span className="title-link ">자세히 보기</span>
      </div>
      <div className="hostel-wrap">
        <div className="hostel-script">
          <div className="hostel-title">
            나의 반려식물
            <br /> 가까운 곳에서 케어받자!
          </div>
          <div className="hostel-tip">
            가장 가까운 호스텔존을 찾아
            <br /> 안전하게 케어 받으세요!
          </div>
        </div>
        <div className="hostel-img">
          <img src={map} alt="" />
        </div>
      </div>
    </HostelSection>
  );
}

const HostelSection = styled.div`
  .title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .title-link {
    color: #767676;
    font-size: 13px;
    line-height: 18px;
    margin-top: 30px;
    margin-bottom: 12px;
    cursor: pointer;
  }

  .hostel-wrap {
    background-color: #b9dae8;
    border-radius: 12px;
    padding: 20px;
    letter-spacing: -2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9.4px;
  }
  .hostel-title {
    color: #24322b;
    font-size: 20px;
    font-family: "Pretendard-SemiBold";
    line-height: 28px;
    margin-bottom: 4px;
  }
  .hostel-tip {
    font-size: 14px;
  }
`;
