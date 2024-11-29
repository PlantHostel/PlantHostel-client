import { ReactNode } from "react";
import styled from "styled-components";

interface HeaderProps {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
}

export const Header = ({ title, left, right }: HeaderProps) => {
  return (
    <HeaderDiv>
      <div className="header_left">{left}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{right}</div>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  margin: 0 -20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(8px);
  border-radius: 0px 0px 6px 6px;
  background-color: rgba(255, 255, 255, 0.15);

  div {
    display: flex;
  }

  .header_left {
    width: 25%;
    justify-content: flex-start;

    button {
      padding: 0;
    }
  }

  .header_right {
    width: 25%;
    justify-content: flex-end;
  }

  .header_center {
    width: 50%;
    font-size: 20px;
    line-height: 28px;
    justify-content: center;
  }
`;
