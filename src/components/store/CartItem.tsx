import styled from "styled-components";
import CommonBox from "../common/CommonBox";
import { CommonButton } from "../common/CommonButton";

interface CartItemProps {
  item: {
    image: string;
    productNm: string;
    price: number;
    deliveryPrice: number;
    remain: number;
  };
}

export const CartItem = ({ item }: CartItemProps) => {
  return (
    <CommonBox>
      <InfoWrapper remain={item.remain} deliveryPrice={item.deliveryPrice}>
        <img className="item-img" src={item.image} />
        <div className="item-info">
          <div className="item-name">{item.productNm}</div>
          <div className="item-price">{`${item.price.toLocaleString()}원`}</div>
          <br />
          <div className="dynamic">
            {item.remain === 0
              ? "일시품절"
              : item.deliveryPrice === 0
              ? "무료배송"
              : item.deliveryPrice.toLocaleString()}
          </div>
        </div>
      </InfoWrapper>
      <ButtonWrapper>
        <CommonButton text="삭제" bgColor="white" txtColor="#073a29" />
        <CommonButton text="예약 문의" />
      </ButtonWrapper>
    </CommonBox>
  );
};

const InfoWrapper = styled.div<{ remain: number; deliveryPrice: number }>`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  .item-img {
    width: 70px;
  }
  .item-info {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .item-name {
    color: #767676;
    font-size: 12px;
    line-height: 18px;
  }

  .item-price {
    color: ${(props) => (props.remain === 0 ? "#767676" : "black")};
  }

  .dynamic {
    color: ${(props) => (props.remain === 0 ? "black" : "#767676")};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;

  button {
    flex: 1;
    height: 40px;
    font-size: 13px;
    line-height: 18px;
  }
`;
