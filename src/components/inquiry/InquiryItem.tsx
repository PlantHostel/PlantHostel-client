import CommonBox from "../common/CommonBox";
import { InfoText } from "../common/InfoText";
import ArrowRight from "../../assets/arrow-right.png";
import PlantImage from "../../assets/info-plant.png";
import moment from "moment";
import styled from "styled-components";

interface InquiryItemProps {
  item: {
    id: number;
    productNm: string;
    createdAt: Date;
    isReply: boolean;
  };
}

export const InquiryItem = ({ item }: InquiryItemProps) => {
  return (
    <InquiryItemContainer>
      <CommonBox>
        <img className="item-img" src={PlantImage} />
        <div className="item-info">
          <InfoText label="상품명" value={item.productNm} wordBreak="nowrap" />
          <InfoText
            label="작성 일자"
            value={moment(item.createdAt).format("YYYY.MM.DD")}
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
    </InquiryItemContainer>
  );
};

const InquiryItemContainer = styled.div`
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
