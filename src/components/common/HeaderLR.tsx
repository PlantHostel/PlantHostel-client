import styled from "styled-components";
import { IconButton } from "./IconButton";

interface IconObj {
  image: string;
  alarmColor?: string;
  count?: number;
}

interface HeaderLRProps {
  title: string;
  icons?: IconObj[];
}

export const HeaderLR = ({ title, icons }: HeaderLRProps) => {
  return (
    <Header>
      <div className="title">{title}</div>
      <div className="icons">
        {icons?.map((icon, index) => (
          <IconButton
            key={index}
            icon={icon.image}
            alarmColor={icon.alarmColor}
            count={icon.count}
          />
        ))}
      </div>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(7, 58, 41, 0.08);
  border-radius: 0px 0px 20px 20px;
  margin: 0 -20px;

  .title {
    font-size: 24px;
    font-family: "Rajdhani Bold";
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
  }
`;
