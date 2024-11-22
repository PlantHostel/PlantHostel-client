import styled from "styled-components";

interface InputErrorProps {
  text: string;
}

export const InputError = ({ text }: InputErrorProps) => {
  return <InputErrorContainer>{text}</InputErrorContainer>;
};

const InputErrorContainer = styled.div`
  color: #b71c1c;
  font-size: 14px;
  line-height: 20px;
  font-family: "Pretendard-Regular";
  padding-top: 5px;
`;
