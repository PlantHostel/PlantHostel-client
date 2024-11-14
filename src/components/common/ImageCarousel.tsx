import styled from "styled-components";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselImage from "../../assets/carousel-image.png";

export const ImageCarousel = () => {
  return (
    <>
      <CarouselDiv>
        <Swiper
          spaceBetween={50}
          modules={[Pagination]}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={CarouselImage} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CarouselImage} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CarouselImage} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CarouselImage} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CarouselImage} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CarouselImage} alt="" />
          </SwiperSlide>
        </Swiper>
      </CarouselDiv>
    </>
  );
};

const CarouselDiv = styled.div`
  display: flex;
  flex-direction: column;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet {
    background-color: #f3fbf8;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #073a29;
  }
`;
