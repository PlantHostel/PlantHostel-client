import styled from "styled-components";

interface FooterProps {
    text: string;
    href: string;
}

export const Footer = ({ text, href }: FooterProps) => {
    return (
        <FooterDiv>
            {text} <span>{href}</span>
        </FooterDiv>
    );
};

const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    margin: 30px 0px;

    span {
        margin-left: 10px;
        color: #073a29;
        text-decoration: underline;
        cursor: pointer;
        font-size: 16px;
    }
`;
