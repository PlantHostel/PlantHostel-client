import styled from "styled-components";
import Title from "../common/Title";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MagazineItem from "./MagazineItem";

export default function MagazineCarousel() {
  return (
    <SwiperContainer>
      <Title title="플랜트 매거진" />
      <Swiper
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={12}
        initialSlide={1}
      >
        <SwiperSlide>
          <MagazineItem />
        </SwiperSlide>
        <SwiperSlide>
          <MagazineItem />
        </SwiperSlide>
        <SwiperSlide>
          <MagazineItem />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}

const SwiperContainer = styled.div`
  .swiper {
    height: 327px;
  }
  .swiper-container {
    overflow: visible;
  }

  .swiper-wrapper {
    display: flex;
    align-items: end;
  }

  .swiper-slide {
    width: 301px;
    height: 301px;
    display: flex;
    transition: height 0.3s ease;
  }
  .swiper-slide.swiper-slide-active {
    width: 326px !important;
    height: 327px;
  }
`;
