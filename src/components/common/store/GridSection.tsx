import { ReactNode } from "react";
import styled from "styled-components";

interface GridSectionProps {
  children: ReactNode;
}

export const GridSection = ({ children }: GridSectionProps) => {
  return <GridDiv>{children}</GridDiv>;
};

const GridDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;
