import styled from "styled-components";
import { Header } from "../../components/common/Header";
import LogoImage from "../../assets/Logo.png";
import { CommonButton } from "../../components/common/CommonButton";

interface FindAccountCheckProps {
  type: string;
}

export const FindAccountCheck = ({ type }: FindAccountCheckProps) => {
  return (
    <FindAccountCheckContainer>
      <Header
        title={type === "id" ? "아이디/비밀번호 찾기" : "비밀번호 재설정"}
      />
      <div className="container">
        <img src={LogoImage} className="logo-image" />
        {type === "id" ? (
          <div>회원님의 아이디는 happy123입니다.</div>
        ) : (
          <div>회원님의 비밀번호가 변경되었습니다.</div>
        )}
        <div className="re-login">다시 로그인 해주세요.</div>
        <div className="date">
          {type === "id" ? "가입일" : "변경일"} : 2024 . 11 . 18
        </div>
      </div>
      <ButtonSection>
        <CommonButton text={"로그인"} />
      </ButtonSection>
    </FindAccountCheckContainer>
  );
};

const FindAccountCheckContainer = styled.div`
  header {
    white-space: nowrap;
  }

  .container {
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 324px;
  }

  .logo-image {
    margin-bottom: 24px;
  }

  .re-login {
    font-family: "Pretendard-Regular";
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 24px;
  }

  .date {
    font-size: 14px;
    font-family: "Pretendard-Regular";
  }
`;

const ButtonSection = styled.div`
  display: flex;

  button {
    flex: 1;
  }
`;
