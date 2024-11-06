import { BorderHeader } from "../components/common/BorderHeader";
import { IconButton } from "../components/common/IconButton";
import LeftArrow from "../assets/arrow-left.png";
import CartImage from "../assets/cart.png";
import styled from "styled-components";
import { ReservationInfo } from "../components/reservation/ReservationInfo";

export const CheckReservation = () => {
  const reservationNumber = 890898384;

  return (
    <CheckReservationBox>
      <BorderHeader
        title="예약확인"
        left={<IconButton icon={LeftArrow} />}
        right={<IconButton icon={CartImage} count={4} alarmColor="#073a29" />}
      />
      <div className="reservation-number">
        예약번호 <span>{reservationNumber}</span>
      </div>
      <ReservationInfo />
    </CheckReservationBox>
  );
};

const CheckReservationBox = styled.div`
  .reservation-number {
    color: #767676;
    font-size: 11px;
    line-height: 16px;
    margin-top: 30px;
    font-family: "Pretendard-Regular";
  }
`;
