import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import WeeklyMagazineImage from "../../assets/weekly-magazine.png";

export const WeeklyMagazineCarousel = () => {
  return (
    <MagazineCarouselContaner>
      <Swiper spaceBetween={16} slidesPerView={1.6} initialSlide={1}>
        <SwiperSlide>
          <WeeklyMagazineContainer>
            <div className="title">MAGAZINE</div>
            <div className="date">2024.10.08</div>
            <img src={WeeklyMagazineImage} />
          </WeeklyMagazineContainer>
        </SwiperSlide>
        <SwiperSlide>
          <WeeklyMagazineContainer>
            <div className="title">MAGAZINE</div>
            <div className="date">2024.10.08</div>
            <img src={WeeklyMagazineImage} />
          </WeeklyMagazineContainer>
        </SwiperSlide>
        <SwiperSlide>
          <WeeklyMagazineContainer>
            <div className="title">MAGAZINE</div>
            <div className="date">2024.10.08</div>
            <img src={WeeklyMagazineImage} />
          </WeeklyMagazineContainer>
        </SwiperSlide>
      </Swiper>
    </MagazineCarouselContaner>
  );
};

const MagazineCarouselContaner = styled.div`
  .swiper-slide {
    display: flex;
    width: 224px !important;
    gap: 16px;
  }
`;

const WeeklyMagazineContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 12px;
  padding: 12px;
  align-items: center;
  width: 224px;
  height: fit-content;

  .title {
    color: #25322b;
    font-size: 28px;
    line-height: 38px;
  }

  .date {
    align-self: flex-end;
    font-size: 8px;
    line-height: 12px;
    color: #25322b;
    font-family: "Pretendard-Regular";
  }

  img {
    width: 200px;
    height: 180px;
  }
`;
