import styled from "styled-components";
import { Header } from "../components/common/Header";
import { IconButton } from "../components/common/IconButton";
import ArrowRight from "../assets/arrow-right.png";
import ArrowLeft from "../assets/arrow-left.png";
import InputLabel from "../components/common/InputLabel";
import CommonBox from "../components/common/CommonBox";

export const Setting = () => {
  return (
    <SettingContainer>
      <Header title="설정" left={<IconButton icon={ArrowLeft} />} />
      <InputLabel labelName="사용자 설정" />
      <CommonBox>
        <ButtonRow>
          개인정보 변경 <img src={ArrowRight} />
        </ButtonRow>
        <ButtonRow>
          반려식물 관리
          <img src={ArrowRight} />
        </ButtonRow>
        <ButtonRow>
          회원 탈퇴
          <img src={ArrowRight} />
        </ButtonRow>
      </CommonBox>
      <InputLabel labelName="앱 설정" />
      <CommonBox>
        <ButtonRow>
          푸시 알림 설정 <img src={ArrowRight} />
        </ButtonRow>
        <ButtonRow>
          소리 설정
          <img src={ArrowRight} />
        </ButtonRow>
        <ButtonRow>
          테마
          <img src={ArrowRight} />
        </ButtonRow>
      </CommonBox>
      <InputLabel labelName="고객센터" />
      <CommonBox>
        <ButtonRow>
          FaQ <img src={ArrowRight} />
        </ButtonRow>
        <ButtonRow>
          공지사항
          <img src={ArrowRight} />
        </ButtonRow>
        <ButtonRow>
          자주 묻는 질문
          <img src={ArrowRight} />
        </ButtonRow>
        <ButtonRow>
          1:1 문의
          <img src={ArrowRight} />
        </ButtonRow>
        <ButtonRow>
          MY 문의내역
          <img src={ArrowRight} />
        </ButtonRow>
      </CommonBox>

      <InputLabel labelName="라이선스" />
      <div className="version">
        <span className="label">버전정보</span>
        <span className="value">1.3.0</span>
      </div>
    </SettingContainer>
  );
};

const SettingContainer = styled.div`
  header {
    margin-bottom: 24px;
  }

  label {
    color: #111111;
    margin-bottom: 7px;
  }

  .box {
    background-color: rgba(255, 255, 255, 0.8);
    margin-bottom: 23px;
  }

  .version {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;

    .label {
      padding: 0 5px;
    }

    .value {
      color: #999999;
      font-size: 14px;
      font-family: "Pretendard-Regular";
    }
  }
`;

const ButtonRow = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 20px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
