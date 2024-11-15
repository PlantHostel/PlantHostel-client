import { ReactNode } from "react";
import styled from "styled-components";

export default function CommonBox({ children }: { children: ReactNode }) {
  return <Box className="box">{children}</Box>;
}

const Box = styled.div`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  padding: 12px;
  border-radius: 6px;
  margin-top: 8px;
  font-size: 13px;
  line-height: 18px;
  font-family: "Pretendard-Regular";
`;
