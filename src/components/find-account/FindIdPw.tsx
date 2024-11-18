import styled from "styled-components";
import InputLabel from "../common/InputLabel";
import { Input } from "../common/Input";
import { CommonButton } from "../common/CommonButton";
import { useEffect, useState } from "react";

interface FindIdPwProps {
  type: string;
  method: string;
}

export const FindIdPw = ({ type, method }: FindIdPwProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);
  const [certCode, setCertCode] = useState("");
  const [isVerified, setIsVerified] = useState(true);

  useEffect(() => {
    let timer: number = 0;

    if (isVisible && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      setIsVisible(false);
    }

    return () => clearInterval(timer);
  }, [isVisible, timeLeft]);

  useEffect(() => {
    setIsVisible(false);
  }, [type, method]);

  function clickCertButton() {
    setIsVisible(true);
    setTimeLeft(180);
  }

  function changeCertCodeInput(e: React.ChangeEvent) {
    const { value } = e.target as HTMLButtonElement;

    setCertCode(value);
  }

  function verifyCode() {
    if (certCode === "123456") {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }

  return (
    <FindIdContainer>
      <FindIdLabel>
        {method === "phone" ? (
          <>
            <div>등록한 휴대전화 번호로 찾기</div>
            {type === "id" ? (
              <div className="small">
                가입 당시 입력한 휴대전화 번호를 통해 인증해주세요
              </div>
            ) : (
              <>
                <div className="small">
                  가입 당시 입력한 휴대전화 번호를 통해 인증 후
                </div>
                <div className="small pad">새 비밀번호로 등록해주세요</div>
              </>
            )}
            {type === "password" && (
              <>
                <InputLabel labelName="아이디" htmlFor="userid" />
                <Input
                  id="userid"
                  name="userid"
                  type="text"
                  placeholder="아이디를 입력해주세요"
                />
              </>
            )}
          </>
        ) : (
          <>
            <div>이메일로 찾기</div>
            {type === "id" ? (
              <div className="small">
                가입 당시 입력한 이메일을 통해 인증해주세요
              </div>
            ) : (
              <>
                <div className="small">
                  가입 당시 입력한 이메일을 통해 인증 후
                </div>
                <div className="small pad">새 비밀번호로 등록해주세요</div>
              </>
            )}
            {type === "password" && (
              <>
                <InputLabel labelName="아이디" htmlFor="userid" />
                <Input
                  id="userid"
                  name="userid"
                  type="text"
                  placeholder="아이디를 입력해주세요"
                />
              </>
            )}
          </>
        )}
      </FindIdLabel>
      {method === "phone" ? (
        <>
          <InputLabel labelName="전화번호" htmlFor="hp" />
          <InputSection>
            <Input
              type="tel"
              placeholder="전화번호를 입력해주세요"
              name="hp"
              id="hp"
            />
            <CommonButton
              text={isVisible ? "재전송" : "인증번호"}
              onClick={clickCertButton}
            />
          </InputSection>
        </>
      ) : (
        <>
          <InputLabel labelName="이메일" htmlFor="email" />
          <InputSection>
            <Input
              type="email"
              placeholder="이메일을 입력해주세요"
              name="email"
              id="email"
            />
            <CommonButton
              text={isVisible ? "재전송" : "인증번호"}
              onClick={clickCertButton}
            />
          </InputSection>
        </>
      )}
      {isVisible && (
        <>
          <CertDiv isVerified={isVerified}>
            <span className="timer">
              {Math.floor(timeLeft / 60)}:
              {String(timeLeft % 60).padStart(2, "0")}
            </span>
            <Input
              type="text"
              id="cert-code"
              name="cert-code"
              placeholder="6자리 인증번호를 입력해주세요"
              onChange={changeCertCodeInput}
            />
          </CertDiv>
          {isVerified ? (
            <>
              <div className="small">3분 이내로 인증번호를 입력해주세요.</div>
              <div className="small">
                제한시간이 지났거나 인증 메일을 받지 못한 경우
              </div>
              <div className="small">인증번호를 다시 받아 주세요.</div>
            </>
          ) : (
            <>
              <div className="small red">인증번호가 올바르지 않습니다.</div>
              <div className="small red">
                다시 입력하거나 인증번호를 다시 받아주세요.
              </div>
            </>
          )}
        </>
      )}
      <ButtonSection isVisible={isVisible}>
        <CommonButton text="다음" onClick={verifyCode} />
      </ButtonSection>
    </FindIdContainer>
  );
};

const FindIdContainer = styled.div`
  .small {
    font-size: 14px;
    line-height: 20px;
    font-family: "Pretendard-Regular";
  }

  .pad {
    margin-bottom: 8px;
  }

  .red {
    color: #b71c1c;
  }

  .red-border {
    border: 1px solid #b71c1c;
  }
`;

const FindIdLabel = styled.div`
  padding: 24px 0;
`;

const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  button {
    white-space: nowrap;
    font-size: 13px;
    line-height: 18px;
    width: 74px;
  }
`;

const ButtonSection = styled.div<{
  isVisible: boolean;
}>`
  display: flex;
  margin-top: ${(props) => (props.isVisible ? "170px" : "302px")};

  button {
    flex: 1;
  }
`;

const CertDiv = styled.div<{
  isVerified?: boolean;
}>`
  position: relative;
  margin-bottom: 12px;

  .timer {
    position: absolute;
    right: 15px;
    top: 16px;
    font-size: 15px;
    line-height: 22px;
    color: #b71c1c;
    font-family: "Pretendard-Regular";
  }

  #cert-code {
    border: ${(props) => (props.isVerified ? "" : "1px solid #b71c1c")};
  }
`;
