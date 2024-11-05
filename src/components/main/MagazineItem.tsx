import styled from "styled-components";
import MagaImg from "../../assets/magaimg.png";

export default function MagazineItem() {
  return (
    <ImageWrapper>
      <img className="magazine-item" src={MagaImg} alt="" />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  .magazine-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
