import styled from "styled-components";
import { CommonButton } from "../common/CommonButton";

interface CartBrandProps {
  shop: {
    image: string;
    name: string;
  };
}

export const CartBrand = ({ shop }: CartBrandProps) => {
  return (
    <CartBrandContainer>
      <div className="brand-shop">
        <div className="left">
          <img src={shop.image} />
          <span className="shop-name">{shop.name}</span>
        </div>
        <div className="right">
          <CommonButton text="삭제" />
        </div>
      </div>
    </CartBrandContainer>
  );
};

const CartBrandContainer = styled.div`
  border-bottom: 2px solid #e8e8e8;

  &:last-child {
    border-bottom: none;
  }

  .brand-shop {
    display: flex;
    padding: 12px;
    justify-content: space-between;
  }

  .brand-shop img {
    width: 32px;
    height: 32px;
  }

  .brand-shop .left {
    display: flex;
    align-items: center;
  }

  .brand-shop .left .shop-name {
    margin-left: 16px;
  }

  .brand-shop .right button {
    width: 45px;
    height: 30px;
    font-size: 13px;
    line-height: 18px;
  }
`;
