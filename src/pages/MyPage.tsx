import { HeaderLR } from "../components/common/HeaderLR";
import NotificationImage from "../assets/Notification.png";
import CartImage from "../assets/cart.png";
import { ProfileBox } from "../components/common/ProfileBox";
import { Carousel } from "../components/common/Carousel";
import { TwoButton } from "../components/common/TwoButton";
import { ButtonSection } from "../components/mypage/ButtonSection";
import styled from "styled-components";
import { Support } from "../components/mypage/Support";

export const MyPage = () => {
    return (
        <>
            <HeaderLR title={"MY PAGE"} icons={[NotificationImage, CartImage]} />
            <ProfileBox boxLabel={"프로필"} />
            <TwoButton whiteTxt={"반려식물 등록"} greenTxt={"프로필 수정"} />
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

const SupportBox = styled.div`
    margin: 43px 0px;
`;

const Logout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    color: #9ca3a0;
`;
