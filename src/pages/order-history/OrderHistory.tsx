import React from "react";
import { BorderHeader } from "../../components/common/BorderHeader";
import { IconButton } from "../../components/common/IconButton";
import LeftArrow from "../../assets/arrow-left.png";
import Cart from "../../assets/cart.png";
import styled from "styled-components";
import InDelivery from "../../components/order-history/InDelivery";
import CompletedDelivery from "../../components/order-history/CompletedDelivery";

export default function OrderHistory() {
  return (
    <div>
      <BorderHeader
        title="주문내역"
        left={<IconButton icon={LeftArrow} />}
        right={<IconButton icon={Cart} />}
      />
      <OrderUser>
        <div className="user-title">
          <span className="user-name">행복한 집사</span>님
        </div>
        <div className="delivery-cnt">
          <div className="delivery-cnt-item">
            <span>배송중</span>
            <span className="delivery-num">1</span>
          </div>
          <div className="delivery-cnt-item">
            <span>배송완료</span>
            <span className="delivery-num">19</span>
          </div>
          <div className="delivery-cnt-item">
            <span>취소/반품</span>
            <span className="delivery-num-zero">0</span>
          </div>
        </div>
      </OrderUser>
      <InDelivery />
      <CompletedDelivery />
    </div>
  );
}

const OrderUser = styled.div`
  margin-bottom: 24px;
  .user-title {
    margin-bottom: 12px;
  }
  .user-name {
    font-size: 20px;
    font-family: "Pretendard-SemiBold";
  }

  .delivery-cnt {
    display: flex;
    font-family: "Pretendard-Regular";
    font-size: 14px;
    padding: 4px 0;
    justify-content: center;
  }

  .delivery-cnt-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    padding: 0px 40px;
  }

  .delivery-cnt-item span {
    white-space: nowrap;
  }

  .delivery-cnt-item:nth-child(2) {
    border-right: 1px solid #dee3e1;
    border-left: 1px solid #dee3e1;
  }
  .delivery-num {
    font-family: "Pretendard-SemiBold";
    color: #004de3;
  }
  .delivery-num-zero {
    color: #9ca3a0;
  }
`;
