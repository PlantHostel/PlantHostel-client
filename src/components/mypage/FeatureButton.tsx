import styled from "styled-components";

interface FeatureButtonProps {
    icon: string;
    label: string;
}

export const FeatureButton = ({ icon, label }: FeatureButtonProps) => {
    return (
        <ButtonDiv>
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div className="label">{label}</div>
        </ButtonDiv>
    );
};

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon {
        width: 62.5px;
        height: 62.5px;
        background-color: rgba(17, 121, 86, 0.15);
        border-radius: 12px;
        margin-bottom: 3px;
    }

    .label {
        font-size: 12px;
        font-family: "Pretendard-Regular";
        line-height: 18px;
    }
`;
