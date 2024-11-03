import styled from "styled-components";

interface ButtonProps {
    text: string;
}

export const Button = ({ text }: ButtonProps) => {
    return <ButtonComponent>{text}</ButtonComponent>;
};

const ButtonComponent = styled.button`
    color: white;
    border: none;
    background-color: #073a29;
    border-radius: 10px;
    padding: 20px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
`;
