import React from "react";
import styled from "styled-components";
import CommonBox from "../../common/CommonBox";
import InDeliveryItem from "../InDeliveryItem";

export default function ExchangeReturnStep3() {
  const data = {
    id: "1",
    name: "[그린애] 수중식물 화분 포함 1종",
    price: "12,650원",
    day: "2024.10.17",
    delivery: "배송완료",
  };

  return (
    <div>
      <Title>선택한 상품</Title>
      <CommonBox>
        <InDeliveryItem item={data} />
      </CommonBox>
    </div>
  );
}

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
`;
