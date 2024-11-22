import styled from "styled-components";
import { Header } from "../../components/common/Header";
import { CommonButton } from "../../components/common/CommonButton";
import InputLabel from "../../components/common/InputLabel";
import { Input } from "../../components/common/Input";
import InputBox from "../../components/common/InputBox";
import { IconButton } from "../../components/common/IconButton";
import LeftArrow from "../../assets/arrow-left.png";
import { InputError } from "../../components/common/InputError";
import { usePasswordCheck } from "../../hooks/usePasswordCheck";

export const ResetPassword = () => {
  const { userpw, userpwCheck, isEqual, changeUserpw, changeUserpwCheck } =
    usePasswordCheck();

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
            type="password"
            value={userpw}
            onChange={changeUserpw}
          />
        </InputBox>
        <InputLabel labelName="비밀번호 확인" htmlFor="userpw-check" />
        <InputBox>
          <Input
            id="userpw-check"
            name="userpw-check"
            type="password"
            value={userpwCheck}
            onChange={changeUserpwCheck}
          />
        </InputBox>
        {!isEqual && <InputError />}
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
