import styled from "styled-components";

interface AnkleProps {
  text: string;
  href: string;
}

export const Ankle = ({ text, href }: AnkleProps) => {
  return (
    <AnkleDiv>
      {text} <span>{href}</span>
    </AnkleDiv>
  );
};
const AnkleDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
  line-height: 18px;
  font-family: "Pretendard-Regular";
  color: #767676;
  margin: 20px 0px;

  span {
    margin-left: 4px;
    color: #073a29;
    cursor: pointer;
    font-family: "Pretendard-Regular";
    font-size: 13px;
    line-height: 18px;
  }
`;
