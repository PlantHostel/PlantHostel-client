import styled from "styled-components";
import { Header } from "../components/common/Header";
import { Footer } from "../components/footer";
import { CommonButton } from "../components/common/CommonButton";
import { IconButton } from "../components/common/IconButton";

export const Signup = () => {
    return (
        <>
            <Header title="회원가입" left={"<"} />
            <InputSection>
                <label htmlFor="userid">
                    <span className="labelName">아이디</span>
                    <div className="with-button">
                        <input type="text" name="userid" id="userid" placeholder="아이디를 입력해주세요" />
                        <CommonButton text="중복확인" />
                    </div>
                </label>
            </InputSection>
            <InputSection>
                <label htmlFor="userpw">
                    <span className="labelName">비밀번호</span>
                    <input type="password" name="userpw" id="userpw" placeholder="비밀번호를 입력해주세요" />
                </label>
            </InputSection>
            <InputSection>
                <label htmlFor="userpwCheck">
                    <span className="labelName">비밀번호 확인</span>
                    <input
                        type="password"
                        name="userpwCheck"
                        id="userpwCheck"
                        placeholder="비밀번호를 한 번 더 입력해주세요"
                    />
                </label>
            </InputSection>
            <InputSection>
                <label htmlFor="nickname">
                    <span className="labelName">닉네임</span>
                    <input type="text" name="nickname" id="nickname" placeholder="닉네임을 입력해주세요" />
                </label>
            </InputSection>
            <InputSection>
                <label htmlFor="hp">
                    <span className="labelName">전화번호</span>
                    <input type="tel" name="hp" id="hp" placeholder="전화번호를 입력해주세요" />
                </label>
            </InputSection>
            <InputSection>
                <label htmlFor="email">
                    <span className="labelName">이메일</span>
                    <input type="email" name="email" id="email" placeholder="이메일을 입력해주세요" />
                </label>
            </InputSection>
            <InputSection>
                <label htmlFor="zipcode">
                    <span className="labelName">우편번호</span>
                    <div className="with-button">
                        <input type="text" name="zipcode" id="zipcode" placeholder="우편번호를 입력해주세요" />
                        <CommonButton text="찾기" />
                    </div>
                </label>
            </InputSection>
            <InputSection>
                <label htmlFor="address">
                    <input type="text" name="address" id="address" placeholder="주소를 입력해주세요" />
                </label>
            </InputSection>
            <InputSection>
                <label htmlFor="address-detail">
                    <input
                        type="text"
                        name="address-detail"
                        id="address-detail"
                        placeholder="상세주소를 입력해주세요"
                    />
                </label>
            </InputSection>
            <CommonButton text={"다음으로"} />
            <Footer text="이미 계정이 있으신가요?" href="로그인" />
        </>
    );
};

const InputSection = styled.div`
    display: flex;
    flex-direction: column;

    .with-button {
        display: flex;
        gap: 8px;
    }

    .with-button input {
        width: 80%;
    }

    .with-button button {
        display: flex;
        align-items: center;
        width: 20%;
        height: 52px;
        justify-content: center;
    }

    label .labelName {
        display: block;
        padding: 5px;
        margin-bottom: 8px;
    }

    label input {
        box-sizing: border-box;
        height: 52px;
        border: 1px solid #dee3e1;
        background-color: #f1f3f5;
        border-radius: 6px;
        background-color: rgba(255, 255, 255, 0.15);
        width: 100%;
        padding: 17px 16px;
        margin-bottom: 16px;
        font-size: 16px;
    }
`;
