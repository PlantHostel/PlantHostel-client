import React from "react";
import styled from "styled-components";
import CommonBox from "../../common/CommonBox";
import InDeliveryItem from "../InDeliveryItem";
import CommonCheckbox from "../../common/CommonCheckbox";
import { CommonButton } from "../../common/CommonButton";

export default function ExchangeReturnStep3() {
  const data = {
    id: "1",
    name: "[그린애] 수중식물 화분 포함 1종",
    price: "12,650원",
    day: "2024.10.17",
    delivery: "배송완료",
  };

  const reasonData = {
    id: "1",
    category: "단순변심",
    reason: " 상품이 마음에 들지 않아요",
  };

  const methodData = [
    {
      id: "1",
      method: "회수 후 새 상품으로 교환",
    },
    {
      id: "2",
      method: "반품 후 환불",
    },
  ];

  const placeData = [
    {
      id: "1",
      method: "문 앞",
    },
    {
      id: "2",
      method: "경비실",
    },
    {
      id: "3",
      method: "그 외 장소 (직접입력)",
    },
  ];

  return (
    <div>
      <Title>선택한 상품</Title>
      <CommonBox>
        <InDeliveryItem item={data} />
        <ReasonSection>
          <div>
            <span>선택사유 | </span>
            <span>{reasonData.category}</span>
          </div>
          <span className="reason">{reasonData.reason}</span>
        </ReasonSection>
      </CommonBox>

      <MethodSection>
        <Title> 방법 선택</Title>
        <CommonBox>
          <div className="radio-section">
            {methodData.map((method, index) => {
              return (
                <div key={index} className="sectino-reason">
                  <CommonCheckbox
                    id={String(index)}
                    type="circle"
                    label="method"
                  />
                  <span>{method.method}</span>
                </div>
              );
            })}
          </div>
        </CommonBox>
      </MethodSection>

      <CollectSection>
        <Title> 회수/환불 정보 확인</Title>
        <CommonBox>
          <div className="user-section">
            <div>
              <div className="subtitle">상품 회수지</div>
              <div className="dataSection">
                <div>김나라</div>
                <div>인천광역시 부평구 가나동 다라아파트 101동 1102호</div>
                <div>010 . 1111 . 2222</div>
              </div>
            </div>
            <div>
              <div className="subtitle">회수 예정일</div>
              <div className="dataSection">10/24(목)</div>
            </div>
            <div>
              <div className="subtitle">회수 요청사항</div>
              <div className="radio-section">
                {placeData.map((place, index) => {
                  return (
                    <div key={index} className="sectino-reason">
                      <CommonCheckbox
                        id={String(index)}
                        type="circle"
                        label="place"
                      />
                      <span>{place.method}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CommonBox>
      </CollectSection>

      <RefundSection>
        <Title>환불안내</Title>
        <CommonBox>
          <div className="refund-wrapper">
            <div className="data-section">
              <div className="subtitle">상품금액</div>
              <div className="price">12,650원</div>
            </div>
            <div className="data-section">
              <div className="subtitle">환불 예상금액</div>
              <div className="refund-price">12,650원</div>
            </div>
            <div className="data-section">
              <div className="subtitle">환불 수단</div>
              <div>카카오뱅크카드/일시불</div>
            </div>
          </div>
        </CommonBox>
      </RefundSection>
      <ButtonWrapper>
        <CommonButton
          text="이전으로"
          size="medium"
          bgColor="rgba(255, 255, 255, 0.15)"
          txtColor="#767676"
        />
        <CommonButton text="신청완료" size="medium" />
      </ButtonWrapper>
    </div>
  );
}

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
`;

const ReasonSection = styled.div`
  font-size: 12px;
  font-family: "Pretendard-Regular";
  .reason {
    color: #9ca3a0;
  }
`;

const MethodSection = styled.div`
  margin-top: 24px;
  .radio-section {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  .sectino-reason {
    font-family: "Pretendard-Regular";
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const CollectSection = styled.div`
  font-size: 13px;
  margin-top: 24px;
  .user-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .subtitle {
    font-family: "Pretendard-SemiBold";
    margin-bottom: 4px;
  }
  .dataSection {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .radio-section {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  .sectino-reason {
    font-family: "Pretendard-Regular";
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const RefundSection = styled.div`
  margin-top: 24px;
  .refund-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 13px;
  }
  .subtitle {
    font-family: "Pretendard-SemiBold";
  }
  .data-section {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  .price {
    font-family: "Pretendard-Regular";
  }
  .refund-price {
    font-family: "Pretendard-SemiBold";
    color: #b71c1c;
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
