import styled from "styled-components";
import { InfoText } from "../common/InfoText";
import { CommonButton } from "../common/CommonButton";
import PlantImage from "../../assets/Rectangle 178.png";
type HostelProps = {
  item: {
    id: number;
    hostemNm: string;
    plantNm: string;
    check: string;
  };
};

export default function HostelItem({ item }: HostelProps) {
  return (
    <ItemWrapper>
      <InfoWrapper>
        <img className="item-img" src={PlantImage} />
        <div className="item-info">
          <InfoText label="호텔명" value={item.hostemNm} wordBreak="nowrap" />
          <InfoText
            label="반려식물명"
            value={item.plantNm}
            wordBreak="nowrap"
          />
          <br />
          <InfoText label="방문일시" value={item.check} wordBreak="nowrap" />
        </div>
      </InfoWrapper>
      <ButtonWrapper>
        <CommonButton
          text="예약 확인"
          bgColor="white"
          txtColor="black"
          size="reservation"
        />
        <CommonButton
          text="예약 문의"
          bgColor="white"
          txtColor="#073A29"
          border="1px solid #073A29"
          size="reservation"
        />
        <CommonButton text="예약 취소" txtColor="white" size="reservation" />
      </ButtonWrapper>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div``;
const InfoWrapper = styled.div`
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
