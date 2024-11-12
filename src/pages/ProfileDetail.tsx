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

export const ProfileDetail = () => {
  return (
    <ProfileDetailDiv>
      <Header title="프로필" left={<IconButton icon={LeftArrow} />} />
      <InputLabel labelName="아이디" />
      <Input
        id="userid"
        name="userid"
        type="text"
        value={"HiPlant1112"}
        readOnly
      />
      <InputLabel labelName="비밀번호" />
      <Input
        id="userpw"
        name="userpw"
        type="password"
        value={"12345678910"}
        readOnly
      />

      <InputLabel labelName="닉네임" />
      <InputBox>
        <Input
          id="nickname"
          name="nickname"
          type="text"
          value={"ZZZ_Hyeon888"}
        ></Input>
      </InputBox>
      <InputLabel labelName="전화번호" />
      <InputBox>
        <Input id="hp" name="hp" type="tel" value={"010-1234-5678"}></Input>
      </InputBox>
      <InputLabel labelName="이메일" />
      <InputBox>
        <Input
          id="email"
          name="email"
          type="email"
          value={"hiplant112@naver.com"}
        ></Input>
      </InputBox>
      <InputLabel labelName={"주소"} />
      <InputBox>
        <Input
          id="address"
          name="address"
          type="text"
          value="서울특별시 강남구 양재로 112 서문빌딩 102동 110호"
        />
      </InputBox>
      <InputLabel labelName="거주형태" />
      <InputBox>
        <ButtonArea>
          <CommonButton text="1인 가구" disabled />
          <CommonButton text="2인 가구" bgColor="#d8dfdd" disabled />
          <CommonButton text="3인 가구" bgColor="#d8dfdd" disabled />
          <CommonButton text="4인 가구" bgColor="#d8dfdd" disabled />
        </ButtonArea>
      </InputBox>
      <InputLabel labelName="성별" />
      <InputBox>
        <ButtonArea>
          <CommonButton text="남성" bgColor="#d8dfdd" disabled />
          <CommonButton text="여성" disabled />
        </ButtonArea>
      </InputBox>
      <InputLabel labelName="선호 식물 종" />
      <InputBox>
        <Input
          id="favorite-plant-species"
          name="favorite-plant-species"
          type="text"
          value="선인장"
          readOnly
        />
      </InputBox>

      <InputLabel labelName="대표 반려 식물 종" />
      <InputBox>
        <Input
          id="main-plant-species"
          name="main-plant-species"
          type="text"
          value={"대표 반려 식물종이 없습니다."} // 있으면 있는거 보여주도록, 없으면 글씨 회색
          readOnly
        />
      </InputBox>

      <InputLabel labelName="대표 반려 식물 상태" />
      <InputBox>
        <Input
          type="text"
          name="main-plant-status"
          id="main-plant-status"
          value={"대표 반려 식물종이 없습니다"} // 있으면 있는거 보여주도록, 없으면 글씨 회색
          readOnly
        />
      </InputBox>

      <InputLabel labelName="프로필 소개" htmlFor="intro" />
      <InputBox>
        <Textarea
          value={
            "안녕하세요. 플렌테리어를 사랑하는 식물인, 그리고 집사 행복한 집사입니다. 소통해요~"
          }
        />
      </InputBox>
      <div className="flex">
        <CommonButton text="수정하기" />
      </div>
    </ProfileDetailDiv>
  );
};

const ProfileDetailDiv = styled.div`
  header {
    padding: 20px 0;

    button {
      padding: 0;
    }
  }

  input {
    border: none;
    background-color: transparent;
    display: flex;
    padding: 5px;
    font-family: "Pretendard-Regular";
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  input:focus {
    outline: none;
  }

  .flex {
    display: flex;
    margin-top: 32px;

    button {
      flex: 1;
    }
  }

  textarea {
    background-color: transparent;
    border: none;
    resize: none;
    padding-left: 5px;
  }

  textarea:focus {
    outline: none;
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
