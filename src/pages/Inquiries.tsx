import styled from "styled-components";
import { IconButton } from "../components/common/IconButton";
import ArrowLeft from "../assets/arrow-left.png";
import CartImage from "../assets/cart.png";
import { BorderHeader } from "../components/common/BorderHeader";
import CommonBox from "../components/common/CommonBox";
import { InfoText } from "../components/common/InfoText";
import PlantImage from "../assets/info-plant.png";
import ArrowRight from "../assets/arrow-right.png";

export const Inquiries = () => {
  const data = [
    {
      id: 1,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      createdAt: "2024.10.17",
      isReply: false,
    },
    {
      id: 2,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      createdAt: "2024.10.17",
      dueDate: false,
    },
    {
      id: 3,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      createdAt: "2024.10.17",
      dueDate: false,
    },
    {
      id: 4,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      createdAt: "2024.10.17",
      dueDate: false,
    },
    {
      id: 5,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      createdAt: "2024.10.17",
      dueDate: false,
    },
  ];

  return (
    <InquriesContainer>
      <BorderHeader
        title="문의내역"
        left={<IconButton icon={ArrowLeft} />}
        right={<IconButton icon={CartImage} count={4} alarmColor="#073a29" />}
      />
      {data.map((item, index) => {
        return (
          <CommonBox key={index}>
            <img className="item-img" src={PlantImage} />
            <div className="item-info">
              <InfoText
                label="상품명"
                value={item.productNm}
                wordBreak="nowrap"
              />
              <InfoText
                label="작성 일자"
                value={item.createdAt}
                wordBreak="nowrap"
              />
              <InfoText
                label="답변 유무"
                value={item.isReply ? "답변완료" : "대기중"}
                wordBreak="nowrap"
              />
            </div>
            <div className="arrow-button">
              <img src={ArrowRight} />
            </div>
          </CommonBox>
        );
      })}
    </InquriesContainer>
  );
};
const InquriesContainer = styled.div`
  .box {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    cursor: pointer;
    align-items: center;
    position: relative;
  }

  .box .value {
  }

  .item-img {
    width: 70px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
  }

  .arrow-button {
    width: 20px;
    height: 20px;
  }

  .arrow-button img {
    width: 1em;
    height: 1em;
    position: absolute;
    right: 12px;
    top: 45%;
  }
`;
