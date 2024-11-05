import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../common/Title";
import MainCarouselItem from "./MainCarouseltem";

type CarouselProps = {
  title: string;
};

export default function BastCellCarousel({ title }: CarouselProps) {
  return (
    <SwiperContainer>
      <Title title={title} />
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
    font-weight: bold;
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