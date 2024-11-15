import { ReactNode } from "react";
import styled from "styled-components";

interface ProfileTextProps {
  label: string;
  value: string | number | ReactNode;
  wordBreak?: string;
}

export const InfoText = ({ label, value, wordBreak }: ProfileTextProps) => {
  return (
    <InfoTextDiv>
      <div className="label">{label}</div>
      <div className={`value ${wordBreak}`}>{value}</div>
    </InfoTextDiv>
  );
};

const InfoTextDiv = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 12px;
  line-height: 18px;
  display: flex;
  margin-bottom: 2px;

  .label {
    width: 50px;
    white-space: nowrap;
    padding-right: 10px;
    font-family: "Pretendard-Regular";
    line-height: 18px;
  }

  .value {
    width: 160px;
    padding-left: 10px;
    color: #5d6762;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .keep-all {
    word-break: keep-all;
  }

  .nowrap {
    white-space: nowrap;
  }

  .normal {
    white-space: normal;
    word-break: keep-all;
  }
`;
