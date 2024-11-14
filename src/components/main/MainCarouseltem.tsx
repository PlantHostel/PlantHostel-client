import styled from "styled-components";
import CarouselImg1 from "../../assets/BestSell.png";
import yellowstar from "../../assets/Star 22.png";
import emptystar from "../../assets/Star 26.png";

export default function MainCarouselItem() {
  return (
    <ItemWrapper>
      <img className="swiper-img" src={CarouselImg1} alt="스와이퍼이미지1" />
      <div className="swiper-des">
        <span className="swiper-brand">플랜비</span>
        <span className="swiper-title">종합 식물영양제 10p 350ml 1개</span>
        <span className="swiper-price">2,250원</span>
        <div className="swiper-review">
          <img src={yellowstar} alt="star" />
          <img src={yellowstar} alt="star" />
          <img src={yellowstar} alt="star" />
          <img src={yellowstar} alt="star" />
          <img src={emptystar} alt="star" />
          <span className="swiper-review-cnt">(112)</span>
        </div>
      </div>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.5%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  .swiper-brand {
    color: #117956;
  }
  .swiper-price {
    color: #073a29;
  }
  .swiper-review-cnt {
    font-family: "Pretendard-Regular";
  }
`;
