import styled from "styled-components";
import { getSocialLoginButton } from "../../utils/getImage";

interface SocialLoginButtonProps {
    text: string;
    type: string;
}

export const SocialLoginButton = ({ text, type }: SocialLoginButtonProps) => {
    return (
        <SocialBtn>
            <img src={getSocialLoginButton(type)} />
            <span className="btn-text">{text}</span>
        </SocialBtn>
    );
};

const SocialBtn = styled.div`
    display: flex;
    background-color: #fafafa;
    color: #767676;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-family: "Pretendard-Regular";
    padding: 12px;
    margin-bottom: 8px;

    img {
        width: 22px;
        height: 22px;
        margin-right: 8px;
    }
`;
