import React from "react";
import styled from "styled-components";
import CommonBox from "../../common/CommonBox";
import CommonCheckbox from "../../common/CommonCheckbox";
import { CommonButton } from "../../common/CommonButton";

export default function ExchangeReturnStep2() {
  const data = [
    {
      category: "단순 변심",
      reasons: ["상품이 마음에 들지 않아요", "더 저렴한 상품을 찾았어요"],
    },
    {
      category: "배송 문제",
      reasons: [
        "다른 상품이 배송 되었어요",
        "상품이 분실되었어요",
        "다른 주소로 배송 되었어요",
      ],
    },
    {
      category: "상품 문제",
      reasons: [
        "상품의 구성/부속품이 들어있지 않아요",
        "상품이 설명과 달라요",
        "상품이 파손되어 있어요",
        "상품에 결함 또는 이상이 있어요",
      ],
    },
  ];
  return (
    <div>
      <Title>사유 선택</Title>
      <CommonBox>
        <Section>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="section-subtitle">{item.category}</div>
                <div className="section-list">
                  {item.reasons.map((reason, index) => {
                    return (
                      <div key={index} className="sectino-reason">
                        <CommonCheckbox
                          id={String(index)}
                          type="circle"
                          label="reason"
                        />
                        <span>{reason}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Section>
      </CommonBox>
      <ButtonWrapper>
        <CommonButton
          text="이전으로"
          size="medium"
          bgColor="rgba(255, 255, 255, 0.15)"
          txtColor="#767676"
        />
        <CommonButton text="다음 단계로" size="medium" />
      </ButtonWrapper>
    </div>
  );
}
const Title = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  .section-subtitle {
    font-size: 13px;
    color: #9ca3a0;
    margin-bottom: 8px;
  }
  .section-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .sectino-reason {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
  margin-top: 72px;
`;
