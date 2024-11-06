import { HeaderLR } from "../components/common/HeaderLR";
import NotificationImage from "../assets/Notification.png";
import CartImage from "../assets/cart.png";
import { ProfileBox } from "../components/common/ProfileBox";
import { Carousel } from "../components/common/Carousel";
import { ButtonSection } from "../components/mypage/ButtonSection";
import styled from "styled-components";
import { Support } from "../components/mypage/Support";
import Title from "../components/common/Title";
import { CommonButton } from "../components/common/CommonButton";

export const MyPage = () => {
    return (
        <>
            <HeaderLR title={"MY PAGE"} icons={[NotificationImage, CartImage]} />
            <Title title={"프로필"} />
            <ProfileBox />
            <ButtonArea>
                <CommonButton text="반려식물 등록" bgColor="white" txtColor="#073a29" />
                <CommonButton text="프로필 수정" />
            </ButtonArea>
            <Title title={"나의 반려식물"} />
            <Carousel />
            <ButtonSection />
            <SupportBox>
                <Support label="자주 묻는 질문" href="더 보기" className="button" />
                <Support label="고객센터" href="바로가기" className="button" />
                <Support label="버전 정보" href="1.03" className="text" />
                <Support label="내 정보 변경" href="수정하기" className="button" />
                <Support label="탈퇴" />
            </SupportBox>
            <Logout>로그아웃</Logout>
        </>
    );
};

const ButtonArea = styled.div`
    display: flex;
    margin-top: 12px;
    justify-content: space-between;

    button {
        align-items: center;
        margin-bottom: 40px;
        height: 46px;
        border: none;
        border-radius: 12px;
        gap: 12px;
        width: 350px;
        height: 50px;
        font-size: 13px;
        line-height: 18px;
        font-family: "Pretendard-SemiBold";
    }
`;

const SupportBox = styled.div`
    margin: 43px 0px;
`;

const Logout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    font-size: 12px;
    line-height: 20px;
    color: #9ca3a0;
`;
