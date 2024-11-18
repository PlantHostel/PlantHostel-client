import styled from "styled-components";
import { CommonButton } from "../common/CommonButton";
import { useState } from "react";
import CommonCheckbox from "../common/CommonCheckbox";
import { FindIdPw } from "./FindIdPw";

export const FindAccountTab = () => {
  const [type, setType] = useState("id");
  const [method, setMethod] = useState("phone");

  function clickRadioButton(e: React.ChangeEvent) {
    const { value } = e.target as HTMLButtonElement;

    if (value === "phone") {
      setMethod("phone");
    } else {
      setMethod("email");
    }
  }

  function clickTypeButton(e: React.MouseEvent<HTMLButtonElement>) {
    const { value } = e.target as HTMLButtonElement;

    if (value === "id") {
      setType("id");
    } else {
      setType("password");
    }
  }

  return (
    <FindAccountTabDiv>
      <ButtonSection>
        <CommonButton
          text="아이디"
          bgColor={type === "id" ? "#073a29" : "#f1f3f5"}
          txtColor={type === "id" ? "white" : "#073a29"}
          value="id"
          onClick={clickTypeButton}
        />
        <CommonButton
          bgColor={type === "password" ? "#073a29" : "#f1f3f5"}
          txtColor={type === "password" ? "white" : "#073a29"}
          text="비밀번호"
          value="password"
          onClick={clickTypeButton}
        />
      </ButtonSection>
      <RadioSection>
        <div className="flex">
          <CommonCheckbox
            id="by-phone"
            label="method"
            type="circle"
            value="phone"
            onChange={clickRadioButton}
            checked={method === "phone"}
          />
          <span className="text">휴대폰으로 찾기</span>
          <CommonCheckbox
            id="by-email"
            label="method"
            type="circle"
            value="email"
            checked={method === "email"}
            onChange={clickRadioButton}
          />
          <span className="text">이메일로 찾기</span>
        </div>
      </RadioSection>
      <FindIdPw type={type} method={method} />
    </FindAccountTabDiv>
  );
};
const FindAccountTabDiv = styled.div`
  margin-top: 72px;
`;

const ButtonSection = styled.div`
  display: flex;
  border-bottom: 3px solid #073a29;

  button {
    border: none;
    border-radius: 0%;
    flex: 1;
    box-shadow: none;
  }
`;

const RadioSection = styled.div`
  .flex {
    display: flex;
    align-items: center;
    margin-top: 8px;
    gap: 4px;
  }

  .flex input[type="radio"] {
    margin: 0;
  }

  .flex .text {
    font-size: 15px;
    margin-right: 10px;
    font-family: "Pretendard-Regular";
  }
`;
