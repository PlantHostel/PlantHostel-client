import styled from "styled-components";

interface ButtonProps {
  text: string;
  size?: string;
  txtColor?: string;
  bgColor?: string;
  border?: string;
  type?: "button" | "submit" | "reset"; // 수정된 부분
  onClick?: () => void;
}

export const CommonButton = ({
  text,
  size,
  bgColor,
  txtColor,
  border,
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <ButtonComponent
      size={size}
      $bgColor={bgColor}
      $txtColor={txtColor}
      border={border}
      type={type}
      onClick={onClick}
    >
      {text}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button<{
  size?: string;
  $bgColor?: string;
  $txtColor?: string;
  border?: string;
}>`
  border-radius: 6px;
  padding: 0 16px;
  font-size: 16px;
  font-family: "Pretendard-SemiBold";
  text-align: center;
  height: 52px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  border: ${(props) => props.border || "none"};
  background-color: ${(props) => props.$bgColor || "#073a29"};
  color: ${(props) => props.$txtColor || "#FFFFFF"};
  box-sizing: content-box;
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

${(props) =>
    props.size === "reservation" &&
    `
    width: 103.33px;
    height: 40px;
    font-size: 13px;
    box-sizing: content-box;
  `}
`;
