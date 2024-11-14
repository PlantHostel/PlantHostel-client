import { BorderHeader } from "../../components/common/BorderHeader";
import { IconButton } from "../../components/common/IconButton";
import LeftArow from "../../assets/arrow-left.png";
import CartImage from "../../assets/cart.png";
import styled from "styled-components";
import { ReservationInfo } from "../../components/reservation/reservation-detail/ReservationDetailInfo";

export const ReservationDetail = () => {
  const reservationNumber = 890898384;

  return (
    <ReservationDetailBox>
      <BorderHeader
        title="예약확인"
        left={<IconButton icon={LeftArow} />}
        right={<IconButton icon={CartImage} count={4} alarmColor="#073a29" />}
      />
      <div className="reservation-number">
        예약번호 <span>{reservationNumber}</span>
      </div>
      <ReservationInfo />
    </ReservationDetailBox>
  );
};

const ReservationDetailBox = styled.div`
  .reservation-number {
    color: #767676;
    font-size: 11px;
    line-height: 16px;
    margin-top: 30px;
    font-family: "Pretendard-Regular";
  }
`;
