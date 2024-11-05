import styled from "styled-components";

interface TwoButtonProps {
    whiteTxt: string;
    greenTxt: string;
}

export const TwoButton = ({ whiteTxt, greenTxt }: TwoButtonProps) => {
    return (
        <TwoButtonDiv>
            <WhiteButton>{whiteTxt}</WhiteButton>
            <GreenButton className="green">{greenTxt}</GreenButton>
        </TwoButtonDiv>
    );
};

const TwoButtonDiv = styled.div`
    display: flex;
    margin-top: 12px;
    justify-content: space-between;

    button {
        display: flex;
        align-items: center;
        height: 46px;
        border: none;
        border-radius: 12px;
        margin-bottom: 40px;
        gap: 12px;
        width: 350px;
        height: 50px;
        font-size: 13px;
        line-height: 18px;
        font-family: "Pretendard-SemiBold";
    }
`;

const WhiteButton = styled.button`
    color: #073a29;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
    margin-right: 12px;
`;

const GreenButton = styled.button`
    color: white;
    justify-content: center;
    align-items: center;
    background-color: #073a29;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
`;
