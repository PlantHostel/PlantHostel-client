import styled from "styled-components";
import { FeatureButton } from "./FeatureButton";

export const ButtonSection = () => {
    return (
        <ButtonSectionDiv>
            <ButtonRow>
                <FeatureButton icon="" label={"주문내역"} />
                <FeatureButton icon="" label={"예약내역"} />
                <FeatureButton icon="" label={"내 리뷰"} />
                <FeatureButton icon="" label={"문의내역"} />
            </ButtonRow>
            <ButtonRow>
                <FeatureButton icon="" label={"찜한상품"} />
                <FeatureButton icon="" label={"최근 본 상품"} />
                <FeatureButton icon="" label={"취소/환불"} />
                <FeatureButton icon="" label={"내 매거진"} />
            </ButtonRow>
        </ButtonSectionDiv>
    );
};

const ButtonSectionDiv = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
`;

const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0;
    }
`;
