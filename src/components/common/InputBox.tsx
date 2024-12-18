import { ReactNode } from "react";
import styled from "styled-components";

interface InputBoxProps {
    children: ReactNode;
}

export default function InputBox({ children }: InputBoxProps) {
    return <InputBoxDiv>{children}</InputBoxDiv>;
}

const InputBoxDiv = styled.div`
    margin-bottom: 16px;
`;
