import styled from "styled-components";

interface IconButtonProps {
  icon: string;
  alarmColor?: string;
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
  $alarmcolor?: string;
}>`
  border: none;
  position: relative;
  cursor: pointer;

  .alarm-count {
    position: absolute;
    background-color: ${(props) => props.$alarmcolor};
    border-radius: 50%;
    color: white;
    width: 6px;
    height: 6px;
    text-align: center;
    line-height: 9px;
    padding: 5px;
    top: -4px;
    right: 1px;
    font-size: 8px;
    font-family: "Pretendard-Medium";
    line-height: 6px;
  }
`;
