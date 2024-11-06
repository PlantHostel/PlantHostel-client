import styled from "styled-components";
import { CommonButton } from "../components/common/CommonButton";
import InputLabel from "../components/common/InputLabel";
import { Header } from "../components/common/Header";
import InputBox from "../components/common/InputBox";
import { Input } from "../components/common/Input";
import { Select } from "../components/common/Select";
import { Textarea } from "../components/common/Textarea";
import SelectArrow from "../assets/select-arrow.png";
import { Footer } from "../components/common/Footer";

export const SignupExtra = () => {
  const data = [
    {
      id: 0,
      text: "매우 양호",
      value: "best",
    },
    {
      id: 1,
      text: "양호",
      value: "great",
    },
    {
      id: 2,
      text: "보통",
      value: "normal",
    },
    {
      id: 3,
      text: "나쁨",
      value: "bad",
    },
    {
      id: 4,
      text: "매우 나쁨",
      value: "worst",
    },
  ];

  return (
    <>
      <Header title={"추가정보 입력"} />

      <InputLabel labelName="거주형태" />
      <InputBox>
        <ButtonArea>
          <CommonButton text="1인 가구" />
          <CommonButton text="2인 가구" bgColor="#d8dfdd" />
          <CommonButton text="3인 가구" bgColor="#d8dfdd" />
          <CommonButton text="4인 가구" bgColor="#d8dfdd" />
        </ButtonArea>
      </InputBox>

      <InputLabel labelName="성별" />
      <InputBox>
        <ButtonArea>
          <CommonButton text="남성" bgColor="#d8dfdd" />
          <CommonButton text="여성" />
        </ButtonArea>
      </InputBox>

      <InputLabel labelName="선호 식물 종" htmlFor="favorite-plant-species" />
      <InputBox>
        <InputSection>
          <Input
            id="favorite-plant-species"
            name="favorite-plant-species"
            type="text"
            placeholder="식물 종을 입력해주세요"
          />
          <CommonButton text="검색" />
        </InputSection>
      </InputBox>

      <InputLabel labelName="대표 반려 식물 종" htmlFor="main-plant-species" />
      <InputBox>
        <InputSection>
          <Input
            id="main-plant-species"
            name="main-plant-species"
            type="text"
            placeholder="대표 반려 식물 종을 입력해주세요"
          />
          <CommonButton text="검색" />
        </InputSection>
      </InputBox>

      <InputLabel labelName="대표 반려 식물 상태" htmlFor="main-plant-status" />
      <InputBox>
        <InputSection>
          <Select
            name="main-plant-status"
            id="main-plant-status"
            placeholder="대표 반려 식물의 상태를 선택해주세요"
            data={data}
          />
          <img src={SelectArrow} />
        </InputSection>
      </InputBox>

      <InputLabel labelName="프로필 소개" htmlFor="intro" />
      <InputBox>
        <InputSection>
          <Textarea placeholder={"100자 이내"} />
        </InputSection>
      </InputBox>

      <ButtonArea>
        <div>
          <CommonButton text="이전으로" bgColor="white" txtColor="#073a29" />
          <CommonButton text="회원가입" />
        </div>
      </ButtonArea>

      <Footer text="이미 계정이 있으신가요?" href="로그인" />
    </>
  );
};

const ButtonArea = styled.div`
  display: flex;
  gap: 8px;

  button {
    white-space: nowrap;
    width: 100%;
    font-size: 13px;
  }

  div {
    display: flex;
    width: 100%;
    gap: 8px;

    button {
      font-size: 16px;
    }
  }
`;

const InputSection = styled.div`
  display: flex;
  gap: 8px;
  position: relative;

  button {
    white-space: nowrap;
    font-size: 13px;
  }

  img {
    width: 12.84px;
    height: 8px;
    position: absolute;
    top: 22px;
    right: 24px;
  }
`;
