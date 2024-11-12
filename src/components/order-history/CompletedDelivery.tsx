import React from "react";
import styled from "styled-components";
import CompletedDeliveryItem from "./CompletedDeliveryItem";
import CommonBox from "../common/CommonBox";

export default function CompletedDelivery() {
  const data = [
    {
      id: 1,
      name: "[그린애] 수중식물 화분 포함 1종",
      price: "12,650원",
      day: "2024.10.17",
      delivery: "배송완료",
    },
    {
      id: 2,
      name: "[그린애] 수중식물 화분 포함 1종",
      price: "12,650원",
      day: "2024.10.17",
      delivery: "배송완료",
    },
    {
      id: 3,
      name: "[그린애] 수중식물 화분 포함 1종",
      price: "12,650원",
      day: "2024.10.17",
      delivery: "배송완료",
    },
  ];
  return (
    <div>
      <DeliveryTitle>배송완료</DeliveryTitle>
      <CompletedDeliveryWrapper>
        {data.map((item) => (
          <CommonBox>
            <CompletedDeliveryItem key={item.id} item={item} />
          </CommonBox>
        ))}
      </CompletedDeliveryWrapper>
    </div>
  );
}
const DeliveryTitle = styled.div`
  margin-bottom: 12px;
  font-size: 20px;
`;
const CompletedDeliveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
