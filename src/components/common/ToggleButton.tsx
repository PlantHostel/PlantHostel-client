import { useState } from "react";
import styled from "styled-components";

interface ToggleButtonProps {
  text1: string;
  text2: string;
}

export const ToggleButton = ({ text1, text2 }: ToggleButtonProps) => {
  const [toggle, setToggle] = useState("left");

  const clickLeftToggle = () => {
    setToggle("left");
  };

  const clickRightToggle = () => {
    setToggle("right");
  };

  return (
    <ToggleButtonDiv className="toggle-buttons">
      <button
        className={`left ${toggle === "left" ? "toggled" : ""}`}
        onClick={clickLeftToggle}
      >
        {text1}
      </button>
      <button
        className={`right ${toggle === "right" ? "toggled" : ""}`}
        onClick={clickRightToggle}
      >
        {text2}
      </button>
    </ToggleButtonDiv>
  );
};

const ToggleButtonDiv = styled.div`
  display: flex;
  background-color: white;
  width: fit-content;
  border-radius: 100px;

  button {
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: none;
    padding: 6px 10px;
    border-radius: 100px;
    font-family: "Pretendard-SemiBold";
    font-size: 12px;
    line-height: 18px;
  }

  button.toggled {
    background-color: #073a29;
    color: white;
  }

  .left,
  .right {
    background-color: white;
    color: #073a29;
  }
`;
