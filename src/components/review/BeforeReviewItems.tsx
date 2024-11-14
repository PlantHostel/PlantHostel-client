import styled from "styled-components";
import CommonBox from "../common/CommonBox";
import { BeforReviewItem } from "./BeforeReviewItem";

export default function BeforeReviewItems() {
  const data = [
    {
      id: 1,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      deliveryDate: "2024.10.17",
      dueDate: "2024.11.31까지",
    },
    {
      id: 2,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      deliveryDate: "2024.10.17",
      dueDate: "2024.11.31까지",
    },
    {
      id: 3,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      deliveryDate: "2024.10.17",
      dueDate: "2024.11.31까지",
    },
    {
      id: 4,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      deliveryDate: "2024.10.17",
      dueDate: "2024.11.31까지",
    },
    {
      id: 5,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      deliveryDate: "2024.10.17",
      dueDate: "2024.11.31까지",
    },
  ];

  return (
    <ReviewWrapper>
      {data.map((item) => (
        <CommonBox>
          <BeforReviewItem key={item.id} item={item} />
        </CommonBox>
      ))}
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
