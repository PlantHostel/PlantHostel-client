import { Header } from "../components/common/Header";
import { IconButton } from "../components/common/IconButton";
import LeftArrow from "../assets/arrow-left.png";
import styled from "styled-components";
import InputLabel from "../components/common/InputLabel";
import InputBox from "../components/common/InputBox";
import { Input } from "../components/common/Input";
import { CommonButton } from "../components/common/CommonButton";
import { Select } from "../components/common/Select";
import { Textarea } from "../components/common/Textarea";

export const EditProfile = () => {
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
    <EditProfileDiv>
      <Header title="프로필 수정" left={<IconButton icon={LeftArrow} />} />
      <InputLabel labelName="아이디" />
      <input className="readonly-input" value={"HiPlant1112"} readOnly />
      <InputLabel labelName="비밀번호" />
      <input
        className="readonly-input"
        type="password"
        value={"12345678910"}
        readOnly
      />
      <InputLabel labelName="비밀번호 변경" htmlFor="userpw" />
      <InputBox>
        <Input
          id="userpw"
          name="userpw"
          type="password"
          placeholder="변경할 비밀번호를 입력해주세요"
        ></Input>
      </InputBox>
      <InputLabel labelName="비밀번호 확인" htmlFor="userpw-check" />
      <InputBox>
        <Input
          id="userpw-check"
          name="userpw-check"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요"
        ></Input>
      </InputBox>
      <InputLabel labelName="닉네임" htmlFor="userpw-check" required />
      <InputBox>
        <Input
          id="nickname"
          name="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={"ZZZ_Hyeon888"}
        ></Input>
      </InputBox>
      <InputLabel labelName="전화번호" htmlFor="hp" required />
      <InputBox>
        <Input
          id="hp"
          name="hp"
          type="tel"
          placeholder="전화번호를 입력해주세요"
          value={"010-1234-5678"}
        ></Input>
      </InputBox>
      <InputLabel labelName="이메일" htmlFor="email" required />
      <InputBox>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={"hiplant112@naver.com"}
        ></Input>
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
        </InputSection>
      </InputBox>

      <InputLabel labelName="프로필 소개" htmlFor="intro" />
      <InputBox>
        <InputSection>
          <Textarea
            placeholder={"100자 이내"}
            value={
              "안녕하세요. 플렌테리어를 사랑하는 식물인, 그리고 집사 행복한 집사입니다. 소통해요~"
            }
          />
        </InputSection>
      </InputBox>
      <div className="flex">
        <CommonButton text="수정완료" />
      </div>
    </EditProfileDiv>
  );
};

const EditProfileDiv = styled.div`
  header {
    padding: 20px 0;

    button {
      padding: 0;
    }
  }

  .readonly-input {
    border: none;
    background-color: transparent;
    display: flex;
    padding: 5px;
    font-family: "Pretendard-Regular";
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  .readonly-input:focus {
    outline: none;
  }

  .flex {
    display: flex;
    margin-top: 48px;

    button {
      flex: 1;
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
