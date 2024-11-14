import { HeaderLR } from "../../components/common/HeaderLR";
import CartImage from "../../assets/cart.png";
import { Search } from "../../components/common/Search";
import styled from "styled-components";
import { ImageCarousel } from "../../components/common/ImageCarousel";
import { ToggleButton } from "../../components/common/ToggleButton";
import { ButtonSection } from "../../components/mypage/ButtonSection";
import { RecommendCarousel } from "../../components/common/store/RecommendCarousel";
import { ButtonCarousel } from "../../components/common/store/ButtonCarousel";
import { GridSection } from "../../components/common/store/GridSection";
import { GridItem } from "../../components/common/store/GridItem";
import GridImage1 from "../../assets/grid-image1.png";
import GridImage2 from "../../assets/grid-image2.png";
import GridImage3 from "../../assets/grid-image3.png";

export const Store = () => {
  const icons = [
    {
      image: CartImage,
    },
  ];

  const buttons = [
    { image: "", label: "꽃" },
    { image: "", label: "다육이/선인장" },
    { image: "", label: "관상수/나무" },
    { image: "", label: "허브" },
    { image: "", label: "난초" },
    { image: "", label: "채소/과일" },
    { image: "", label: "수경식물" },
    { image: "", label: "에어플랜트" },
  ];

  const gridItem = [
    {
      image: GridImage1,
      isSale: true,
      saleRate: 52,
      price: 12800,
      storeName: "그린조아",
      productName: "여인초",
      content: "공기정화식물 여인초 중사이즈 1+1",
      soldCount: 32,
    },
    {
      image: GridImage2,
      isSale: true,
      saleRate: 52,
      price: 12800,
      storeName: "그린조아",
      productName: "여인초",
      content: "공기정화식물 여인초 중사이즈 1+1",
      soldCount: 1230,
    },
    {
      image: GridImage2,
      isSale: true,
      saleRate: 52,
      price: 12800,
      storeName: "그린조아",
      productName: "여인초",
      content: "공기정화식물 여인초 중사이즈 1+1",
      soldCount: 480,
    },
    {
      image: GridImage3,
      isSale: true,
      saleRate: 52,
      price: 12800,
      storeName: "그린조아",
      productName: "여인초",
      content: "공기정화식물 여인초 중사이즈 1+1",
      soldCount: 120,
    },
  ];

  return (
    <StoreDiv>
      <HeaderLR title="STORE" icons={icons} />
      <Search placeholder="집사님, 어떤 상품을 찾고 계신가요?" />
      <ImageCarousel />
      <ToggleButton text1={"식물종류"} text2={"원예상품"} />
      <ButtonSection buttons={buttons} />
      <div className="recommend">
        <span className="nickname">행복한 집사</span>님을 위한 추천 상품
      </div>
      <ButtonCarousel />
      <RecommendCarousel />
      <GridSection>
        {gridItem.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </GridSection>
    </StoreDiv>
  );
};

const StoreDiv = styled.div`
  .search-input {
    margin: 24px 0px;
  }

  .toggle-buttons {
    margin: 24px auto;
  }

  .button-section {
    background-color: transparent;
    box-shadow: none;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 24px;
    padding-top: 0px;
  }

  .recommend {
    display: flex;
    align-items: flex-end;
    font-size: 18px;
    margin-bottom: 12px;
  }

  .recommend .nickname {
    font-size: 20px;
    margin-right: 2px;
  }
`;
