import styled from "styled-components";
import { Header } from "../components/common/Header";
import { CommonButton } from "../components/common/CommonButton";
import { IconButton } from "../components/common/IconButton";
import { Input } from "../components/common/Input";
import { Ankle } from "../components/common/Ankle";
import LeftArrow from "../assets/arrow-left.png";
import InputLabel from "../components/common/InputLabel";
import InputBox from "../components/common/InputBox";

export const Signup = () => {
  return (
    <SignupDiv>
      <Header title="회원가입" left={<IconButton icon={LeftArrow} />} />

      <InputLabel labelName={"아이디"} htmlFor="userid" required />
      <InputBox>
        <InputSection>
          <Input
            id="userid"
            name="userid"
            type="text"
            placeholder="아이디를 입력해주세요"
          />
          <CommonButton text="중복확인" />
        </InputSection>
      </InputBox>

      <InputLabel labelName={"비밀번호"} htmlFor="userpw" required />
      <InputBox>
        <InputSection>
          <Input
            id="userpw"
            name="userpw"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </InputSection>
      </InputBox>

      <InputLabel labelName={"비밀번호 확인"} htmlFor="userpw-check" required />
      <InputBox>
        <InputSection>
          <Input
            id="userpw-check"
            name="userpw-check"
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요"
          />
        </InputSection>
      </InputBox>

      <InputLabel labelName={"닉네임"} htmlFor="nickname" required />
      <InputBox>
        <InputSection>
          <Input
            id="nickname"
            name="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
          />
        </InputSection>
      </InputBox>

      <InputLabel labelName={"전화번호"} htmlFor="hp" required />
      <InputBox>
        <InputSection>
          <Input
            id="hp"
            name="hp"
            type="tel"
            placeholder="전화번호를 입력해주세요"
          />
        </InputSection>
      </InputBox>

      <InputLabel labelName={"이메일"} htmlFor="email" required />
      <InputBox>
        <InputSection>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
        </InputSection>
      </InputBox>

      <InputLabel labelName={"우편번호"} htmlFor="zipcode" required />
      <InputBox>
        <InputSection>
          <Input
            id="zipcode"
            name="zipcode"
            type="tel"
            placeholder="우편번호를 입력해주세요"
          />
          <CommonButton text={"찾기"} />
        </InputSection>
      </InputBox>
      <InputBox>
        <InputSection>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="주소를 입력해주세요"
          />
        </InputSection>
      </InputBox>
      <InputBox>
        <InputSection>
          <Input
            id="address-detail"
            name="address-detail"
            type="text"
            placeholder="상세주소를 입력해주세요"
          />
        </InputSection>
      </InputBox>
      <WideButton>
        <CommonButton text={"다음으로"} />
      </WideButton>
      <Ankle text="이미 계정이 있으신가요?" href="로그인" />
    </SignupDiv>
  );
};

const SignupDiv = styled.div`
  header {
    padding: 20px 0px;

    button {
      padding: 0px;
    }
  }
`;

const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  button {
    white-space: nowrap;
    font-size: 13px;
    line-height: 18px;
    width: 74px;
  }
`;

const WideButton = styled.div`
  display: flex;

  button {
    flex: 1;
  }
`;
