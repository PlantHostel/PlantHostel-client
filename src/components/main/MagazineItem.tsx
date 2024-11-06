import styled from "styled-components";
import MagaImg from "../../assets/magaimg.png";

export default function MagazineItem() {
  return (
    <ImageWrapper>
      <img className="magazine-item" src={MagaImg} alt="" />
      <span className="magazine-script">
        나만의 작은 정원,
        <br /> 특별하게 만드는 법
      </span>
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
  .magazine-script {
    font-size: 28px;
    letter-spacing: -2.5%;
    line-height: 38px;
    position: absolute;
    color: #f3fbf8;
    bottom: 20px;
    left: 20px;
  }
`;
