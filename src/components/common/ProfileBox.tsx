import styled from "styled-components";
import ProfileImage from "../../assets/profile-image.png";
import { ProfileText } from "../mypage/ProfileText";

export const ProfileBox = () => {
    return (
        <Profile>
            <Box>
                <div className="profile-image">
                    <img src={ProfileImage} alt="" />
                </div>
                <div>
                    <ProfileText label="닉네임" value="ZZU_Hyeon888" />
                    <ProfileText label="전화번호" value="010.8857.3679" />
                    <ProfileText label="이메일" value="ssy9989@naver.com" />
                </div>
            </Box>
        </Profile>
    );
};

const Profile = styled.div`
    display: flex;
    flex-direction: column;

    .profile-label {
        font-size: 20px;
        margin-bottom: 12px;
    }

    .profile-box {
        display: flex;
        padding: 20px;
        align-items: center;

        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
        border-radius: 6px;
    }
`;

const Box = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;

    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
    border-radius: 6px;

    .profile-image {
        width: 60px;
        height: 60px;
        margin-right: 20px;
    }
`;
