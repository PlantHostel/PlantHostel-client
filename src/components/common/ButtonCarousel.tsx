import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { CommonButton } from "./CommonButton";

interface ButtonCarouselProps {
  buttons: {
    text: string;
  }[];
  state: { selected: number; setSelected: (index: number) => void };
}

export const ButtonCarousel = ({ buttons, state }: ButtonCarouselProps) => {
  const { selected, setSelected } = state;

  const clickButton = (index: number) => {
    setSelected(index);
  };

  return (
    <SwiperContainer className="button-carousel">
      <Swiper slidesPerView={6} spaceBetween={4}>
        {buttons.map((button, index) => (
          <SwiperSlide key={index}>
            <CommonButton
              text={button.text}
              bgColor={selected === index ? "" : "transparent"}
              txtColor={selected === index ? "" : "#9ca3a0"}
              onClick={() => clickButton(index)}
            />
          </SwiperSlide>
        ))}
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
