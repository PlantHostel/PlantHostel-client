import styled from "styled-components";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <CarouselDiv>
      <Swiper
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselDiv>
  );
};

const CarouselDiv = styled.div`
  display: flex;
  flex-direction: column;
  .swiper {
    margin: 0 -20px;
  }

  .swiper-pagination-bullet {
    background-color: #f3fbf8;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #073a29;
  }
`;
