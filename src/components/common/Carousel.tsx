import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PlantImage from "../../assets/plant-image.png";
import { ProfileText } from "../mypage/ProfileText";

export const Carousel = () => {
    return (
        <>
            <Label>나의 반려식물</Label>
            <BoxDiv>
                <CarouselDiv>
                    <Swiper
                        spaceBetween={50}
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true, el: ".custom-pagination" }}
                    >
                        <SwiperSlide>
                            <div className="plant-image">
                                <img src={PlantImage} alt="" />
                            </div>
                            <div className="plant-info">
                                <ProfileText label={"이름"} value={"튼튼이"} />
                                <ProfileText label={"종"} value={"올리브나무"} />
                                <ProfileText label={"난이도"} value={"중"} />
                                <ProfileText label={"특징"} value={"공기 정화 식물"} />
                                <ProfileText label={"상태"} value={"매우 양호"} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="plant-image">
                                <img src={PlantImage} alt="" />
                            </div>
                            <div className="plant-info">
                                <ProfileText label={"이름"} value={"튼튼이"} />
                                <ProfileText label={"종"} value={"올리브나무"} />
                                <ProfileText label={"난이도"} value={"중"} />
                                <ProfileText label={"특징"} value={"공기 정화 식물"} />
                                <ProfileText label={"상태"} value={"매우 양호"} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="plant-image">
                                <img src={PlantImage} alt="" />
                            </div>
                            <div className="plant-info">
                                <ProfileText label={"이름"} value={"튼튼이"} />
                                <ProfileText label={"종"} value={"올리브나무"} />
                                <ProfileText label={"난이도"} value={"중"} />
                                <ProfileText label={"특징"} value={"공기 정화 식물"} />
                                <ProfileText label={"상태"} value={"매우 양호"} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="plant-image">
                                <img src={PlantImage} alt="" />
                            </div>
                            <div className="plant-info">
                                <ProfileText label={"이름"} value={"튼튼이"} />
                                <ProfileText label={"종"} value={"올리브나무"} />
                                <ProfileText label={"난이도"} value={"중"} />
                                <ProfileText label={"특징"} value={"공기 정화 식물"} />
                                <ProfileText label={"상태"} value={"매우 양호"} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="plant-image">
                                <img src={PlantImage} alt="" />
                            </div>
                            <div className="plant-info">
                                <ProfileText label={"이름"} value={"튼튼이"} />
                                <ProfileText label={"종"} value={"올리브나무"} />
                                <ProfileText label={"난이도"} value={"중"} />
                                <ProfileText label={"특징"} value={"공기 정화 식물"} />
                                <ProfileText label={"상태"} value={"매우 양호"} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="custom-pagination"></div>
                </CarouselDiv>
            </BoxDiv>
        </>
    );
};

const Label = styled.div`
    font-size: 20px;
    margin-bottom: 12px;
    font-family: "Pretendard";
`;

const BoxDiv = styled.div`
    padding: 12px 12px 40px 12px;
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
`;

const CarouselDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .swiper {
        margin: 0;
        width: 100%;
        height: 100%;
    }

    .swiper-wrapper {
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        box-sizing: border-box;
        width: 100%;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
    }

    .swiper-slide .plant-image {
        width: 117px;
        height: 158px;
        background-image: url(../assets/plant-image.png);
        background-size: cover;
        background-position: center;
    }

    .swiper-slide .plant-info {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 12px;
    }

    .custom-pagination {
        position: absolute;
        bottom: -24px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }

    .custom-pagination .swiper-pagination-bullet-active {
        background-color: black;
    }
`;