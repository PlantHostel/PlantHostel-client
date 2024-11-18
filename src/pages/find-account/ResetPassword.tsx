import styled from "styled-components";
import { Header } from "../../components/common/Header";
import { CommonButton } from "../../components/common/CommonButton";
import InputLabel from "../../components/common/InputLabel";
import { Input } from "../../components/common/Input";
import InputBox from "../../components/common/InputBox";
import Show from "../../assets/Show.png";
import Hide from "../../assets/Hide.png";
import React, { useEffect, useState } from "react";
import { IconButton } from "../../components/common/IconButton";
import LeftArrow from "../../assets/arrow-left.png";

export const ResetPassword = () => {
  const [pwMasking, setPwMasking] = useState(true);
  const [pwCheckMasking, setPwCheckMasking] = useState(true);
  const [userpw, setUserpw] = useState("");
  const [userpwCheck, setUserpwCheck] = useState("");
  const [isEqual, setIsEqual] = useState(true);

  function changeUserpw(e: React.ChangeEvent) {
    const { value } = e.target as HTMLInputElement;

    setUserpw(value);
  }

  function changeUserpwCheck(e: React.ChangeEvent) {
    const { value } = e.target as HTMLInputElement;

    setUserpwCheck(value);
  }

  useEffect(() => {
    if (userpw !== userpwCheck) {
      setIsEqual(false);
    } else {
      setIsEqual(true);
    }
  }, [userpw, userpwCheck]);

  return (
    <ResetPasswordContainer isEqual={isEqual}>
      <Header title="비밀번호 재설정" left={<IconButton icon={LeftArrow} />} />
      <div className="container">
        <InputLabel labelName="아이디" htmlFor="userid" />
        <InputBox>
          <Input
            id="userid"
            type="text"
            name="userid"
            value="happy123"
            readOnly
          />
        </InputBox>
        <InputLabel labelName="비밀번호" htmlFor="userpw" />
        <InputBox>
          <Input
            id="userpw"
            name="userpw"
            type={pwMasking ? "password" : "text"}
            value={userpw}
            onChange={changeUserpw}
          />
          <img
            src={pwMasking ? Hide : Show}
            className="show-password"
            onClick={() => setPwMasking((prev) => !prev)}
          />
        </InputBox>
        <InputLabel labelName="비밀번호 확인" htmlFor="userpw-check" />
        <InputBox>
          <Input
            id="userpw-check"
            name="userpw-check"
            type={pwCheckMasking ? "password" : "text"}
            value={userpwCheck}
            onChange={changeUserpwCheck}
          />
          <img
            src={pwCheckMasking ? Hide : Show}
            className="show-password"
            onClick={() => setPwCheckMasking((prev) => !prev)}
          />
        </InputBox>
        {!isEqual && (
          <div className="different">비밀번호가 일치하지 않습니다.</div>
        )}
      </div>
      <ButtonSection>
        <CommonButton text="완료" />
      </ButtonSection>
    </ResetPasswordContainer>
  );
};

const ResetPasswordContainer = styled.div<{ isEqual: boolean }>`
  header {
    padding: 20px 0;
  }

  header button {
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;

    margin-bottom: ${(props) => (props.isEqual ? "302px" : "282px")};
  }

  .container input:read-only {
    border: none;
    background-color: transparent;
    display: flex;
    padding: 5px;
    font-family: "Pretendard-Regular";
    font-size: 15px;
    line-height: 22px;
  }

  .container .input-box {
    position: relative;
  }

  .show-password {
    position: absolute;
    cursor: pointer;
    right: 15px;
    top: 15px;
  }

  .different {
    color: #b71c1c;
    font-size: 14px;
    line-height: 20px;
    font-family: "Pretendard-Regular";
  }

  #userpw-check {
    border: ${(props) => (props.isEqual ? "" : "1px solid #b71c1c")};
  }
`;

const ButtonSection = styled.div`
  display: flex;

  button {
    flex: 1;
  }
`;
