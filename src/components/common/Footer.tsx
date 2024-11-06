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
    font-size: 14px;
    font-family: "Pretendard-Regular";
    color: #767676;
    margin: 20px 0px;

    span {
        margin-left: 4px;
        color: #073a29;
        text-decoration: underline;
        cursor: pointer;
        font-family: "Pretendard-Medium";
        font-size: 14px;
    }
`;
