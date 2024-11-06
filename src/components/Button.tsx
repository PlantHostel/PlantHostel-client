import styled from "styled-components";

interface ButtonProps {
    text?: string;
    image?: string;
}

export const Button = ({ text, image }: ButtonProps) => {
    return (
        <ButtonComponent>
            {image && <img src={image} />}
            {text}
        </ButtonComponent>
    );
};

const ButtonComponent = styled.button`
    color: white;
    border: none;
    background-color: #073a29;
    border-radius: 6px;
    padding: 20px 10px;
    font-size: 16px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    width: 100%;
`;
