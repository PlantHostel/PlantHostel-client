import styled from "styled-components";
import { Header } from "../components/common/Header";
import { IconButton } from "../components/common/IconButton";
import ArrowLeft from "../assets/arrow-left.png";
import CommonBox from "../components/common/CommonBox";
import { CommonButton } from "../components/common/CommonButton";

export const Quit = () => {
  return (
    <QuitContainer>
      <Header title="회원 탈퇴" left={<IconButton icon={ArrowLeft} />} />
      <WarnMsg>
        <span className="bold">잠시만요!</span>
        <span className="light">회원 탈퇴 전 아래 정보를 확인해주세요</span>
      </WarnMsg>
      <CommonBox>
        <BoxContent>
          <div>개인 이용 내역 삭제</div>
          <div className="content">
            탈퇴 시 회원님의 정보는 모두 사라집니다. <br />
            플랜트호스텔을 다시 이용하고자 하실 경우 회원가입을 다시 해주셔야
            합니다.
          </div>
        </BoxContent>
      </CommonBox>
      <CommonBox>
        <BoxContent>
          <div>예약내역 보유 시 탈퇴 불가</div>
          <div className="content">
            회원님의 반려식물이 병원 또는 호텔 서비스에 예약되어있는 경우,
            탈퇴가 불가능합니다. <br />
            예약일 이후 탈퇴를 진행해주세요.
          </div>
        </BoxContent>
      </CommonBox>
      <CommonBox>
        <BoxContent>
          <div>상품 수령 전 탈퇴 불가</div>
          <div className="content">
            회원님이 주문하신 상품이 준비중이거나 배송중일 경우, 배송완료가 될
            때까지 탈퇴가 불가능합니다. <br />
            상품 수령 후 탈퇴를 진행해주세요.
          </div>
        </BoxContent>
      </CommonBox>
      <ButtonSection>
        <CommonButton
          text="취소"
          bgColor="rgba(255, 255, 255, 0.15)"
          txtColor="#767676"
        />
        <CommonButton text="탈퇴하기" bgColor="#B71C1C" />
      </ButtonSection>
    </QuitContainer>
  );
};

const QuitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .box {
    margin-top: 12px;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const WarnMsg = styled.div`
  margin-top: 72px;
  margin-bottom: 48px;

  .bold {
    display: flex;
    justify-content: center;
    margin-bottom: 4px;
  }

  .light {
    font-size: 15px;
    line-height: 22px;
    font-family: "Pretendard-Regular";
    color: #505050;
  }
`;

const BoxContent = styled.div`
  div {
    font-size: 15px;
    line-height: 22px;
  }

  .content {
    margin-top: 4px;
    font-size: 14px;
    line-height: 20px;
    color: #505050;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-top: 48px;
  margin-bottom: 41px;

  button {
    flex: 1;
    white-space: nowrap;
  }
`;
