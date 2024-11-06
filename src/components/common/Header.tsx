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
    padding: 20px 0px;

    div {
        display: flex;
    }

    .header_left {
        width: 25%;
        justify-content: flex-start;
    }

    .header_right {
        width: 25%;
        justify-content: flex-end;
    }

    .header_center {
        width: 50%;
        font-size: 20px;
        justify-content: center;
    }
`;
