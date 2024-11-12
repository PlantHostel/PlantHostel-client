import styled from "styled-components";
import CommonBox from "../common/CommonBox";
import { AfterReviewItem } from "./AfterReviewItem";
import PlantImage from "../../assets/info-plant.png";
import PlantImage2 from "../../assets/plant-image.png";
import { useState } from "react";

export default function AfterReviewItems() {
  const data = [
    {
      id: 1,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      images: [
        PlantImage,
        PlantImage2,
        PlantImage,
        PlantImage2,
        PlantImage,
        PlantImage2,
      ],
      rate: 4,
      price: 12650,
      deliveryDate: "2024.10.17",
      createdAt: "2024.10.20",
      content:
        "디자인이 이쁘고 마음에 들어요. 인테리어에 효과 굿! 지인들 추천으로 구매했다가 새로 하나 더 장만했어요. 화분의 모양 또한 디자인이 독특해서 보는 맛이 나네요. 가격 대비 훌륭한 퀄리티에 더욱이 뿌듯합니다 ^^",
    },
    {
      id: 2,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      images: [
        PlantImage,
        PlantImage2,
        PlantImage,
        PlantImage2,
        PlantImage,
        PlantImage2,
      ],
      rate: 4,
      price: 12650,
      deliveryDate: "2024.10.17",
      createdAt: "2024.10.20",
      content:
        "디자인이 이쁘고 마음에 들어요. 인테리어에 효과 굿! 지인들 추천으로 구매했다가 새로 하나 더 장만했어요. 화분의 모양 또한 디자인이 독특해서 보는 맛이 나네요. 가격 대비 훌륭한 퀄리티에 더욱이 뿌듯합니다 ^^",
    },
    {
      id: 3,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      images: [
        PlantImage,
        PlantImage2,
        PlantImage,
        PlantImage2,
        PlantImage,
        PlantImage2,
      ],
      rate: 4,
      price: 12650,
      deliveryDate: "2024.10.17",
      createdAt: "2024.10.20",
      content:
        "디자인이 이쁘고 마음에 들어요. 인테리어에 효과 굿! 지인들 추천으로 구매했다가 새로 하나 더 장만했어요. 화분의 모양 또한 디자인이 독특해서 보는 맛이 나네요. 가격 대비 훌륭한 퀄리티에 더욱이 뿌듯합니다 ^^",
    },
    {
      id: 4,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      images: [
        PlantImage,
        PlantImage2,
        PlantImage,
        PlantImage2,
        PlantImage,
        PlantImage2,
      ],
      rate: 4,
      price: 12650,
      deliveryDate: "2024.10.17",
      createdAt: "2024.10.20",
      content:
        "디자인이 이쁘고 마음에 들어요. 인테리어에 효과 굿! 지인들 추천으로 구매했다가 새로 하나 더 장만했어요. 화분의 모양 또한 디자인이 독특해서 보는 맛이 나네요. 가격 대비 훌륭한 퀄리티에 더욱이 뿌듯합니다 ^^",
    },
    {
      id: 5,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      images: [
        PlantImage,
        PlantImage2,
        PlantImage,
        PlantImage2,
        PlantImage,
        PlantImage2,
      ],
      rate: 4,
      price: 12650,
      deliveryDate: "2024.10.17",
      createdAt: "2024.10.20",
      content:
        "디자인이 이쁘고 마음에 들어요. 인테리어에 효과 굿! 지인들 추천으로 구매했다가 새로 하나 더 장만했어요. 화분의 모양 또한 디자인이 독특해서 보는 맛이 나네요. 가격 대비 훌륭한 퀄리티에 더욱이 뿌듯합니다 ^^",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <ReviewWrapper>
      {data.map((item, index) => (
        <CommonBox key={item.id}>
          <AfterReviewItem
            item={item}
            expanded={index === expandedIndex}
            onClick={() => handleAccordionClick(index)}
          />
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
