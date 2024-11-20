import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { CommonButton } from "../common/CommonButton";

export const ButtonCarousel = () => {
  return (
    <SwiperContainer>
      <Swiper slidesPerView={6} spaceBetween={4}>
        <SwiperSlide>
          <CommonButton text="생화" />
        </SwiperSlide>
        <SwiperSlide>
          <CommonButton text="조화" bgColor="transparent" txtColor="#9ca3a0" />
        </SwiperSlide>
        <SwiperSlide>
          <CommonButton
            text="가드닝"
            bgColor="transparent"
            txtColor="#9ca3a0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommonButton
            text="정원용"
            bgColor="transparent"
            txtColor="#9ca3a0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommonButton
            text="데코용"
            bgColor="transparent"
            txtColor="#9ca3a0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommonButton
            text="인테리어"
            bgColor="transparent"
            txtColor="#9ca3a0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommonButton text="원예" bgColor="transparent" txtColor="#9ca3a0" />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  margin-bottom: 12px;

  .swiper-slide {
    display: flex;
    width: auto !important;
  }

  .swiper-slide button {
    border: 1px solid #9ca3a0;
    padding: 4px 12px;
    width: auto;
    height: 26px;
    font-size: 12px;
    white-space: nowrap;
    line-height: 18px;
    border-radius: 100px;
  }
`;
