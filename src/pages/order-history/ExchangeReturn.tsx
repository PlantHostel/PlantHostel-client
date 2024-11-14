import { BorderHeader } from "../../components/common/BorderHeader";
import { IconButton } from "../../components/common/IconButton";
import LeftArrow from "../../assets/arrow-left.png";
import ExchangeReturnStep1 from "../../components/order-history/exchange-return/ExChangeReturnStep1";
import OrderItem from "../../components/order-history/exchange-return/OrderItem";
import styled from "styled-components";
import ExchangeReturnStep2 from "../../components/order-history/exchange-return/ExchangeReturnStep2";
import ExchangeReturnStep3 from "../../components/order-history/exchange-return/ExchangeReturnStep3";

export default function ExchangeReturn() {
  return (
    <div>
      <BorderHeader
        title="교환/반품 신청"
        left={<IconButton icon={LeftArrow} />}
      />
      <OrderWrapper>
        <OrderItem order={"1"} text={"상품선택"} level={true} />
        <OrderItem order={"2"} text={"사유선택"} level={false} />
        <OrderItem order={"3"} text={"방법선택"} level={false} />
      </OrderWrapper>
      {/* <ExchangeReturnStep1 /> */}
      {/* <div>2단계</div>
      <br />
      <br />
      <br />
      <ExchangeReturnStep2 /> */}
      <ExchangeReturnStep3 />
    </div>
  );
}
const OrderWrapper = styled.div`
  display: flex;
  margin: 42px 0;
  justify-content: space-around;
`;
