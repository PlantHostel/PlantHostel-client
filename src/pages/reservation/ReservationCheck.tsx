import { BorderHeader } from "../../components/common/BorderHeader";
import { IconButton } from "../../components/common/IconButton";
import LeftArrow from "../../assets/arrow-left.png";
import CartImage from "../../assets/cart.png";
import ReservationTab from "../../components/reservation/ReservationTab";

export default function ReservationCheck() {
  return (
    <>
      <BorderHeader
        title="예약확인"
        left={<IconButton icon={LeftArrow} />}
        right={<IconButton icon={CartImage} count={4} alarmColor="#073a29" />}
      />
      <ReservationTab />
    </>
  );
}
