import styled from "styled-components";

interface IconButtonProps {
    icon: string;
    alarmColor: string;
    count?: number;
}

export const IconButton = ({ icon, alarmColor, count }: IconButtonProps) => {
    return (
        <>
            <Button $alarmcolor={alarmColor}>
                <img src={icon} />
                {count ? <span className="alarm-count">{count}</span> : <></>}
            </Button>
        </>
    );
};

const Button = styled.button<{
    $alarmcolor: string;
}>`
    border: none;
    position: relative;

    .alarm-count {
        position: absolute;
        background-color: ${(props) => props.$alarmcolor};
        border-radius: 50%;
        color: white;
        width: 9px;
        height: 9px;
        text-align: center;
        line-height: 9px;
        padding: 5px;
        top: -6px;
        right: -1px;
        font-size: 14px;
    }
`;
