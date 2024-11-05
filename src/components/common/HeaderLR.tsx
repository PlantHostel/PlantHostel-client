import styled from "styled-components";
import { IconButton } from "./IconButton";

interface HeaderLRProps {
    title: string;
    icons: string[];
}

export const HeaderLR = ({ title, icons }: HeaderLRProps) => {
    return (
        <Header>
            <div className="title">{title}</div>
            <div className="icons">
                <IconButton icon={icons[0]} alarmColor="#b71c1c" count={9} />
                <IconButton icon={icons[1]} alarmColor="#073a29" count={4} />
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
