import styled from "styled-components";
import { Header } from "../components/common/Header";
import { getLogoImage } from "../utils/getImage";
import { CommonButton } from "../components/common/CommonButton";
import { Input } from "../components/common/Input";
import { Link } from "react-router-dom";
import { SocialLoginButton } from "../components/login/SocialLoginButton";
import unchecked from "../assets/unchecked.png";
import checked from "../assets/checked.png";
import { Ankle } from "../components/common/Ankle";
import InputLabel from "../components/common/InputLabel";
import InputBox from "../components/common/InputBox";

export const Login = () => {
  return (
    <LoginContainer>
      <Header title={"로그인"} />
      <div className="image_section">
        <img src={getLogoImage()} />
      </div>
      <InputLabel labelName="ID" htmlFor="userid" />
      <InputBox>
        <Input
          type="text"
          name="userid"
          id="userid"
          placeholder="아이디를 입력해주세요"
        />
      </InputBox>
      <InputLabel labelName="Password" htmlFor="userpw" />
      <InputBox>
        <Input
          type="password"
          name="userpw"
          id="userpw"
          placeholder="비밀번호를 입력해주세요"
        />
      </InputBox>
      <div className="login-options">
        <div className="remember-id">
          <input type="checkbox" id="rememberId" />
          <label htmlFor="rememberId">아이디 저장</label>
        </div>
        <div className="find-account">
          <Link to={""}>아이디/비밀번호 찾기</Link>
        </div>
      </div>
      <SocialLoginButtons>
        <SocialLoginButton text="카카오 로그인" type="kakao" />
        <SocialLoginButton text="네이버 로그인" type="naver" />
        <SocialLoginButton text="구글 로그인" type="google" />
      </SocialLoginButtons>
      <CommonButton text={"로그인"} />
      <Ankle text={"아직 회원이 아니신가요?"} href={"회원가입"} />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .image_section {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .login-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-options .remember-id {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-family: "Pretendard-Regular";
  }

  .login-options .remember-id input {
    appearance: none;
    cursor: pointer;
    border: 1px solid #dee3e1;
    width: 20px;
    margin-bottom: 0;
    height: 20px;
    border-radius: 50%;
    background: url(${unchecked}) no-repeat 50% #fafafa;

    &:checked {
      border: 1px solid #073a29;
      background: url(${checked}) no-repeat 50% #fafafa;
    }
  }

  .login-options .remember-id label {
    margin-left: 5px;
    cursor: pointer;
    color: #767676;
  }

  .login-options .find-account {
    font-family: "Pretendard-Regular";
    font-size: 15px;
  }

  .login-options .find-account a {
    text-decoration: none;
  }

  .login-options .find-account a:visited {
    color: #767676;
  }

  .login-options .find-account::after {
    content: ">";
    margin-left: 4px;
    color: #767676;
  }

  .sign_in {
    display: flex;
    justify-content: center;
    font-size: 16px;
    margin-top: 40px;
  }

  .sign_in span {
    margin-left: 10px;
    color: #073a29;
    text-decoration: underline;
    cursor: pointer;
    font-size: 16px;
  }
`;

const SocialLoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 16px;
  font-family: "Pretendard-Regular";
  cursor: pointer;
`;
