import React from "react";
import styled from "styled-components";

type PropsType = {
  order: string;
  text: string;
  level: boolean;
};

export default function OrderItem({ order, text, level }: PropsType) {
  return (
    <Order level={level}>
      <div className="order-num">{order}</div>
      <div className="order-text">{text}</div>
    </Order>
  );
}

const Order = styled.div<{ level: boolean }>`
  display: flex;
  gap: 8px;

  .order-num {
    font-family: "Pretendard-Medium";
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ level }) => (level ? "#073a29" : "#9CA3A0")};
    color: white;
  }
  .order-text {
    color: ${({ level }) => (level ? "#073a29" : "#9CA3A0")};
  }
`;
