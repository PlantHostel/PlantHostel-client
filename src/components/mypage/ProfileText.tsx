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
    display: flex;
    align-items: center;
    margin-bottom: 2px;

    .label {
        width: 80px;
    }

    .value {
        color: #5d6762;
        white-space: nowrap;
    }
`;
