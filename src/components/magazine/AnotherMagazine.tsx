import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import MagazineImage1 from "../../assets/magazine-image1.png";
import MagazineImage2 from "../../assets/magazine-image2.png";
import MagazineImage3 from "../../assets/magazine-image3.png";
import MagazineImage4 from "../../assets/magazine-image4.png";

export const AnotherMagazine = () => {
  return (
    <AnotherMagzineContainer>
      <div className="another-magazine">작성자의 다른 매거진</div>
      <Swiper slidesPerView={2.6} initialSlide={0} spaceBetween={12}>
        <SwiperSlide>
          <img src={MagazineImage1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MagazineImage2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MagazineImage3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MagazineImage4} />
        </SwiperSlide>
      </Swiper>
    </AnotherMagzineContainer>
  );
};

const AnotherMagzineContainer = styled.div`
  .another-magazine {
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 12px;
  }

  .swiper-slide img {
    width: 122px;
    height: 149px;
  }
`;
