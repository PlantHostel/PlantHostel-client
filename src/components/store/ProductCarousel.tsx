import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCarouselItem } from "./ProductCarouselItem";
import RecommendImage1 from "../../assets/recommnend-image1.png";
import RecommendImage2 from "../../assets/recommnend-image2.png";
import RecommendImage3 from "../../assets/recommnend-image3.png";

export const ProductCarousel = () => {
  const productItem = [
    {
      image: RecommendImage1,
      isSale: true,
      saleRate: 52,
      price: 12800,
      storeName: "그린조아",
      productName: "여인초",
      content: "공기정화식물 여인초를 통해 쾌적한 공기를 느껴보세요",
    },
    {
      image: RecommendImage2,
      isSale: true,
      saleRate: 24,
      price: 16500,
      storeName: "그린조아",
      productName: "여인초",
      content: "공기정화식물 여인초를 통해 쾌적한 공기를 느껴보세요",
    },
    {
      image: RecommendImage3,
      isSale: false,
      saleRate: 52,
      price: 9800,
      storeName: "그린조아",
      productName: "여인초",
      content: "공기정화식물 여인초를 통해 쾌적한 공기를 느껴보세요",
    },
    {
      image: RecommendImage1,
      isSale: false,
      saleRate: 52,
      price: 12900,
      storeName: "그린조아",
      productName: "여인초",
      content: "공기정화식물 여인초를 통해 쾌적한 공기를 느껴보세요",
    },
    {
      image: RecommendImage2,
      isSale: false,
      saleRate: 52,
      price: 12800,
      storeName: "그린조아",
      productName: "여인초",
      content: "공기정화식물 여인초를 통해 쾌적한 공기를 느껴보세요",
    },
  ];

  return (
    <SwiperContainer>
      <Swiper spaceBetween={12} slidesPerView={4}>
        {productItem.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCarouselItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  .swiper-slide {
    display: flex;
    width: 101px !important;
  }
`;
