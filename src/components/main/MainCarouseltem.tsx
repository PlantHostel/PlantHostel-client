import CarouselImg1 from "../../assets/BestSell.png";
import yellowstar from "../../assets/Star 22.png";
import emptystar from "../../assets/Star 26.png";

export default function MainCarouselItem() {
  return (
    <>
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
    </>
  );
}
