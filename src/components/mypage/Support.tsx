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
        font-family: "Pretendard";
    }

    .button {
        color: #117956;
    }

    .text {
        color: #9ca3a0;
    }

    .button:after {
        content: ">";
        margin-left: 3px;
        color: #117956;
    }
`;
