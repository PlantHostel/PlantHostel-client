import styled from "styled-components";
import CommonBox from "../common/CommonBox";
import InDeliveryItem from "./InDeliveryItem";
import { CommonButton } from "../common/CommonButton";

export default function InDelivery() {
  const data = [
    {
      id: "1",
      name: "[그린애] 수중식물 화분 포함 1종",
      price: "12,650원",
      day: "2024.10.17",
      delivery: "출고완료",
    },
    {
      id: "2",
      name: "[그린애] 수중식물 화분 포함 1종",
      price: "12,650원",
      day: "2024.10.17",
      delivery: "출고완료",
    },
    {
      id: "3",
      name: "[그린애] 수중식물 화분 포함 1종",
      price: "12,650원",
      day: "2024.10.17",
      delivery: "출고완료",
    },
  ];
  return (
    <div style={{ marginBottom: "24px" }}>
      <DeliveryTitle>배송중인 상품</DeliveryTitle>
      <InDeliveryWrapper>
        {data.map((item) => (
          <CommonBox>
            <InDeliveryItem key={item.id} item={item} />
            <ButtonWrapper>
              <CommonButton
                text="교환/반품 신청"
                bgColor="white"
                txtColor="black"
                size="reservation"
              />
              <CommonButton
                text="배송 조회"
                bgColor="white"
                txtColor="#073A29"
                border="1px solid #073A29"
                size="reservation"
              />
              <CommonButton
                text="리뷰 작성"
                txtColor="white"
                size="reservation"
              />
            </ButtonWrapper>
          </CommonBox>
        ))}
      </InDeliveryWrapper>
    </div>
  );
}

const DeliveryTitle = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
`;
const InDeliveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
