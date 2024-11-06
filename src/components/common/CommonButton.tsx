import styled from "styled-components";

interface ButtonProps {
    text: string;
    size?: string;
    txtColor?: string;
    bgColor?: string;
    border?: string;
}

export const CommonButton = ({ text, size, bgColor, txtColor, border }: ButtonProps) => {
    return (
        <ButtonComponent size={size} bgColor={bgColor} txtColor={txtColor} border={border}>
            {text}
        </ButtonComponent>
    );
};

const ButtonComponent = styled.button<{
    size?: string;
    bgColor?: string;
    txtColor?: string;
    border?: string;
}>`
    border-radius: 10px;
    padding: 0 20px;
    font-size: 16px;
    font-family: "Pretendard-SemiBold";
    text-align: center;
    height: 52px;
    cursor: pointer;
    border: ${(props) => props.border || "none"};
    background-color: ${(props) => props.bgColor || "#073a29"};
    color: ${(props) => props.txtColor || "#FFFFFF"};
    ${(props) =>
        props.size === "small" &&
        `
    width: 79.2px;
  `}

    ${(props) =>
        props.size === "medium" &&
        `
    width: 171px;
  `}

${(props) =>
    props.size === "main" &&
    `
    width: 326px;
  `}
`;
