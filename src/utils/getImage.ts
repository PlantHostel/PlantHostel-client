import logoImage from "../assets/Logo.png";
import NaverLoginIcon from "../assets/naver_circle_btn.png";
import GoogleLoginIcon from "../assets/google_circle_btn.png";
import KakaoLoginIcon from "../assets/kakao_circle_btn.png";

export const getLogoImage = () => {
    return logoImage;
};

export const getSocialLoginButton = (type: string) => {
    switch (type) {
        case "google":
            return GoogleLoginIcon;
        case "naver":
            return NaverLoginIcon;
        case "kakao":
            return KakaoLoginIcon;
        default:
            return;
    }
};
