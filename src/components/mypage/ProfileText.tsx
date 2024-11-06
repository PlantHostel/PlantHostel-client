import styled from "styled-components";

interface ProfileTextProps {
    label: string;
    value: string;
}

export const ProfileText = ({ label, value }: ProfileTextProps) => {
    return (
        <ProfileTextDiv>
            <div className="label">{label}</div>
            <div className="value">{value}</div>
        </ProfileTextDiv>
    );
};

const ProfileTextDiv = styled.div`
    font-family: "Pretendard-Regular";
    font-size: 13px;
    line-height: 18px;
    display: flex;
    margin-bottom: 2px;

    .label {
        width: 50px;
        white-space: nowrap;
        padding-right: 10px;
        font-family: "Pretendard-SemiBold";
        line-height: 18px;
    }

    .value {
        width: 148px;
        display: flex;
        padding-left: 10px;
        color: #5d6762;
    }
`;
