import { useEffect, useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";
import InputBox from "./InputBox";
import { CommonButton } from "./CommonButton";

interface CertCodeProps {
  visibleState: {
    isVisible: boolean;
    setIsVisible: (flag: boolean) => void;
  };
}

export const CertCode = ({ visibleState }: CertCodeProps) => {
  const [certCode, setCertCode] = useState("");
  const { isVisible, setIsVisible } = visibleState;
  const [isVerified, setIsVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    let timer: number = 0;

    if (isVisible && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      setIsVisible(false);
    } else if (isVerified) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isVisible, timeLeft, isVerified, setIsVisible]);

  function changeCertCodeInput(e: React.ChangeEvent) {
    const { value } = e.target as HTMLButtonElement;

    setCertCode(value);
  }

  function verifyCode() {
    if (certCode === "123456") {
      setIsVerified(true);
      alert("인증되었습니다.");
    } else {
      setIsVerified(false);
      alert("인증에 실패했습니다.");
    }
  }

  return (
    <CertDiv isVerified={isVerified}>
      {!isVerified && (
        <span className="timer">
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
        </span>
      )}
      <InputBox>
        <Input
          type="text"
          id="cert-code"
          name="cert-code"
          value={certCode}
          placeholder="6자리 인증번호를 입력해주세요"
          onChange={changeCertCodeInput}
        />
        <CommonButton text="확인" onClick={verifyCode} />
      </InputBox>
    </CertDiv>
  );
};

const CertDiv = styled.div<{
  isVerified?: boolean;
}>`
  position: relative;
  margin-bottom: 12px;

  .timer {
    position: absolute;
    right: 100px;
    top: 15px;
    font-size: 15px;
    line-height: 22px;
    color: #b71c1c;
    font-family: "Pretendard-Regular";
  }

  .input-box {
    display: flex;
    gap: 8px;

    button {
      white-space: nowrap;
      font-size: 13px;
      line-height: 18px;
      width: 64px;
    }
  }
`;
