import styled from "styled-components";
import { ReservationInfoRow } from "./ReservationInfoRow";
import { InfoBox } from "../common/InfoBox";
import PlantImage from "../../assets/info-plant.png";
import { CommonButton } from "../common/CommonButton";

export const ReservationInfo = () => {
  const data = [
    {
      id: 1,
      label: "반려식물명",
      value: "다육이 1호",
    },
    { id: 2, label: "호텔명", value: "CAFE 식물과 함께라면 ROOM-01" },
    { id: 3, label: "주소", value: "인천광역시 부평구 라다동 211호 2층" },
  ];
  return (
    <>
      <ReservationInfoBox>
        <div className="title">
          <ReservationInfoRow label="결제 정보" />
        </div>
        <ReservationInfoRow label="예약금액" value="15,900원" />
        <ReservationInfoRow label="체크인" value="2024.10.27" />
        <ReservationInfoRow label="체크아웃" value="2024.10.28" />
        <ReservationInfoRow label="총 결제금액" value="15,900원" />
        <div className="name">
          <ReservationInfoRow label="김나라" />
        </div>
        <ReservationInfoRow label="인천광역시 부평구 가나동 다라아파트 101동 1102호" />
        <ReservationInfoRow label="010.1111.2222" />
      </ReservationInfoBox>
      <InfoBox img={PlantImage} data={data} wordBreak="nowrap" />
      <ButtonArea>
        <CommonButton text="예약 취소" />
      </ButtonArea>
    </>
  );
};

const ReservationInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  padding: 12px;
  border-radius: 6px;
  margin-top: 8px;
  font-size: 13px;
  line-height: 18px;
  font-family: "Pretendard-Regular";

  .title,
  .name {
    font-family: "Pretendard-SemiBold";
  }

  .name {
    margin-top: 12px;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  margin-top: 216px;

  button {
    flex: 1;
  }
`;
