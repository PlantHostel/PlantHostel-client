import styled from "styled-components";
import { InfoText } from "../common/InfoText";
import PlantImage from "../../assets/info-plant.png";
import RightArrow from "../../assets/arrow-right.png";

interface BeforeReviewItemProps {
  item: {
    id: number;
    productNm: string;
    deliveryDate: string;
    dueDate: string;
  };
}

export const BeforReviewItem = ({ item }: BeforeReviewItemProps) => {
  return (
    <InfoWrapper>
      <img className="item-img" src={PlantImage} />
      <div className="item-info">
        <InfoText label="상품명" value={item.productNm} wordBreak="nowrap" />
        <InfoText
          label="배송일자"
          value={item.deliveryDate}
          wordBreak="nowrap"
        />
        <br />
        <InfoText label="작성기한" value={item.dueDate} wordBreak="nowrap" />
      </div>
      <img src={RightArrow} className="arrow-button" />
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  position: relative;

  .item-img {
    width: 70px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .arrow-button {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 12px;
    top: 50%;
  }
`;
