import styled from "styled-components";
import MagaImg from "../../assets/magaimg.png";
import Heart from "../../assets/heart-filled.png";

export default function MagazineItem() {
  return (
    <ImageWrapper>
      <img className="magazine-item" src={MagaImg} alt="" />
      <span className="magazine-count">4/5</span>
      <span className="magazine-script">
        나만의 작은 정원,
        <br /> 특별하게 만드는 법
      </span>
      <div className="like">
        <img src={Heart} />
        <span className="heart-count">390</span>
      </div>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  .magazine-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .magazine-count {
    position: absolute;
    top: 10px;
    right: 12px;
    padding: 2px 8px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 100px;
    color: white;
    font-size: 11px;
    line-height: 16px;
    font-family: "Pretendard-Regular";
  }

  .magazine-script {
    font-size: 28px;
    letter-spacing: -2.5%;
    line-height: 38px;
    position: absolute;
    color: #f3fbf8;
    bottom: 30px;
    left: 20px;
  }

  .like {
    display: flex;
    align-items: center;
    gap: 4px;
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: white;
    font-size: 14px;
    line-height: 20px;
    font-family: "Pretendard-Regular";
  }
`;
