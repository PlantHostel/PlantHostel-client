import styled from "styled-components";

interface SupportProps {
    label: string;
    href?: string;
    className?: string;
}

export const Support = ({ label, href, className }: SupportProps) => {
    return (
        <SupportDiv>
            <div className="label">{label}</div>
            <div className={`${className}`}>{href}</div>
        </SupportDiv>
    );
};

const SupportDiv = styled.div`
    border-top: 1px solid #e8e8e8;
    padding: 12px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .label {
        font-size: 16px;
        line-height: 26px;
    }

    .button {
        color: #117956;
        font-size: 12px;
        line-height: 18px;
        font-family: "Pretendard-Regular";
    }

    .text {
        font-family: "Pretendard-Regular";
        font-size: 12px;
        line-height: 18px;
        color: #9ca3a0;
    }

    .button:after {
        content: ">";
        margin-left: 3px;
        color: #117956;
    }
`;
