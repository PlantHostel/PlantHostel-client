import styled from "styled-components";
import { BorderHeader } from "../../components/common/BorderHeader";
import ArrowLeft from "../../assets/arrow-left.png";
import CartImage from "../../assets/cart.png";
import { IconButton } from "../../components/common/IconButton";
import { useState } from "react";
import PlantImage from "../../assets/info-plant.png";
import ReviewImage from "../../assets/review-image.png";
import CommonBox from "../../components/common/CommonBox";
import { CartBrand } from "../../components/store/CartBrand";
import { CartItem } from "../../components/store/CartItem";

export const Cart = () => {
  const cartItems = [
    {
      image: PlantImage,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      price: 12650,
      deliveryPrice: 0,
      remain: 10,
    },
    {
      image: PlantImage,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      price: 12650,
      deliveryPrice: 0,
      remain: 10,
    },
    {
      image: PlantImage,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      price: 12650,
      deliveryPrice: 0,
      remain: 0,
    },
    {
      image: PlantImage,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      price: 12650,
      deliveryPrice: 0,
      remain: 0,
    },
  ];

  const brandShops = [
    { image: ReviewImage, name: "그린애" },
    { image: ReviewImage, name: "신선한 카페" },
    { image: ReviewImage, name: "플랜테리하우스" },
    { image: ReviewImage, name: "행복한 식물가게" },
  ];

  const [menu, setMenu] = useState<string>("상품");

  const changeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.dataset.value!;

    setMenu(value);
  };

  return (
    <>
      <BorderHeader
        title="찜 내역"
        left={<IconButton icon={ArrowLeft} />}
        right={<IconButton icon={CartImage} />}
      />
      <TabSection menu={menu}>
        <div className="tab1" data-value={"상품"} onClick={changeMenu}>
          상품(180)
        </div>
        <div className="tab2" data-value={"브랜드 샵"} onClick={changeMenu}>
          브랜드 샵(4)
        </div>
      </TabSection>
      {menu === "상품" ? (
        cartItems.map((item, index) => <CartItem item={item} key={index} />)
      ) : (
        <CommonBox>
          {brandShops.map((shop, index) => (
            <CartBrand shop={shop} key={index} />
          ))}
        </CommonBox>
      )}
    </>
  );
};

const TabSection = styled.div<{ menu: string }>`
  display: flex;

  .tab1,
  .tab2 {
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #073a29;
    cursor: pointer;
  }

  .tab1 {
    border-bottom: ${(props) =>
      props.menu === "상품" ? "3px solid #073a29" : ""};
  }

  .tab2 {
    border-bottom: ${(props) =>
      props.menu === "브랜드 샵" ? "3px solid #073a29" : ""};
  }
`;
