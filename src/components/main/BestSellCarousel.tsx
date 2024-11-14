// import "swiper/css";
// import "swiper/css/pagination";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../common/Title";
import MainCarouselItem from "./MainCarouseltem";

export default function BestCellCarousel() {
  return (
    <SwiperContainer>
      <div className="title-wrap">
        <Title title="식집사 인기 필수템" />
        <span className="title-link ">전체보기</span>
      </div>
      <Swiper spaceBetween={8} slidesPerView={3}>
        <SwiperSlide>
          <MainCarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <MainCarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <MainCarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <MainCarouselItem />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}

const SwiperContainer = styled.div`
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
  .swiper-slide {
    width: 130px !important;
    display: flex;
    flex-direction: column;
  }

  .swiper-img {
    height: 130px;
    object-fit: fill;
  }

  .swiper-des {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 6px;
    border-radius: 0 0 6px 6px;
  }

  .swiper-brand {
    color: #073a29;
    margin-bottom: 2px;
  }

  .swiper-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .swiper-price {
    color: #073a29;
  }

  .swiper-review-cnt {
    font-size: 10px;
  }
`;
