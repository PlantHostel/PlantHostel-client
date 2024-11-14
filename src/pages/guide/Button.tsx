import styled from "styled-components";
import { CommonButton } from "../../components/common/CommonButton";

export const Button = () => {
  return (
    <ButtonWrap>
      <CommonButton
        text="small 버튼"
        size="small"
        bgColor="#FFFFFF"
        txtColor="#000000"
        border="solid #073a29"
      />
      <CommonButton text="small 버튼" size="small" />
      <CommonButton
        text="medium 버튼"
        size="medium"
        bgColor="#FFFFFF"
        txtColor="#000000"
        border="solid #073a29"
      />
      <CommonButton text="medium 버튼" size="medium" />
    </ButtonWrap>
  );
};

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
