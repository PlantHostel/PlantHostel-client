import styled from "styled-components";
import InDeliveryItem from "../InDeliveryItem";
import CommonBox from "../../common/CommonBox";
import { CommonButton } from "../../common/CommonButton";
import CommonCheckbox from "../../common/CommonCheckbox";

export default function ExchangeReturnStep1() {
  const data = [
    {
      id: "1",
      name: "[그린애] 수중식물 화분 포함 1종",
      price: "12,650원",
      day: "2024.10.17",
      delivery: "배송완료",
    },
    {
      id: "2",
      name: "[그린애] 수중식물 화분 포함 1종",
      price: "12,650원",
      day: "2024.10.17",
      delivery: "배송완료",
    },
    {
      id: "3",
      name: "[그린애] 수중식물 화분 포함 1종",
      price: "12,650원",
      day: "2024.10.17",
      delivery: "배송완료",
    },
  ];
  return (
    <div>
      <Title>배송중인 상품</Title>
      <InDeliveryWrapper>
        {data.map((item) => (
          <CommonBox>
            <ItemWrapper>
              <InDeliveryItem key={item.id} item={item} />
              <CommonCheckbox id={item.id} type="square" />
            </ItemWrapper>
          </CommonBox>
        ))}
      </InDeliveryWrapper>
      <ButtonWrapper>
        <CommonButton text="다음 단계로" size="main" />
      </ButtonWrapper>
    </div>
  );
}

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
`;

const InDeliveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 112px;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;
