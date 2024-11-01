import styled from "styled-components";
import { Header } from "../components/Header";
import { getLogoImage, getSocialLoginButton } from "../utils/getImage";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const Login = () => {
    return (
        <LoginContainer>
            <Header title={"로그인"} />
            <div className="image_section">
                <img src={getLogoImage()} />
            </div>
            <Input labelName="ID" type="text" name="userId" id="userId" placeholder="아이디를 입력해주세요" />
            <Input
                labelName="Password"
                type="password"
                name="userPw"
                id="userPw"
                placeholder="비밀번호를 입력해주세요"
            />
            <span className="orSpan">or</span>
            <SocialLoginButtons>
                <div>
                    <img src={getSocialLoginButton("kakao")} />
                </div>
                <div>
                    <img src={getSocialLoginButton("google")} />
                </div>
                <div>
                    <img src={getSocialLoginButton("naver")} />
                </div>
            </SocialLoginButtons>
            <Button text={"로그인"} />
            <div className="sign_in">
                아직 회원이 아니신가요? <span>회원가입</span>
            </div>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .image_section {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }

    .orSpan {
        display: flex;
        justify-content: center;
        color: #9ca3a0;
        margin-top: 36px;
    }

    .sign_in {
        display: flex;
        justify-content: center;
        font-size: 16px;
    }

    .sign_in span {
        margin-left: 10px;
        color: #073a29;
        text-decoration: underline;
        cursor: pointer;
        font-size: 16px;
    }
`;

const SocialLoginButtons = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    margin-top: 36px;
    margin-bottom: 48px;
    cursor: pointer;

    img {
        width: 32px;
        height: 32px;
        margin: 0px 15px;
    }
`;
