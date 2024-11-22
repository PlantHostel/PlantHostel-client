import React, { useState } from "react";
import styled from "styled-components";
import Show from "../../assets/Show.png";
import Hide from "../../assets/Hide.png";

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
}

export const Input = ({
  type,
  name,
  id,
  placeholder,
  value,
  readOnly,
  isError,
  onChange
}: InputProps) => {
  const [pwMasking, setPwMasking] = useState(true);

  return (
    <InputSection isError={isError}>
      <input
        type={type === "password" ? (pwMasking ? "password" : "text") : type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
      {type === "password" && (
        <img
          src={pwMasking ? Hide : Show}
          className="show-password"
          onClick={() => setPwMasking((prev) => !prev)}
        />
      )}
    </InputSection>
  );
};

const InputSection = styled.div<{ isError?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 3px;

  input {
    box-sizing: border-box;
    height: 52px;
    border: 1px solid ${(props) => (props.isError ? "#b71c1c" : "#dee3e1")};
    background-color: #f1f3f5;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.15);
    width: 100%;
    padding: 17px 20px;
    font-family: "Pretendard-Regular";
    font-size: 15px;
    line-height: 22px;
  }

  .show-password {
    position: absolute;
    cursor: pointer;
    right: 15px;
    top: 15px;
  }
`;
