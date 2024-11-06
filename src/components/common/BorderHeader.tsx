import styled from "styled-components";
import { Header } from "./Header";
import { ReactNode } from "react";

interface BorderHeaderProps {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
}

export const BorderHeader = ({ title, left, right }: BorderHeaderProps) => {
  return (
    <BorderHeaderDiv>
      <Header title={title} left={left} right={right} />
    </BorderHeaderDiv>
  );
};

const BorderHeaderDiv = styled.div`
  header {
    box-shadow: 0px 2px 4px rgba(7, 58, 41, 0.08);
    border-radius: 0px 0px 20px 20px;
    margin: 0px -20px;
  }
`;
