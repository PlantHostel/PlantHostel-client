import styled from "styled-components";
import { CommonButton } from "../common/CommonButton";

export const TimeSelect = () => {
  return (
    <TimeSelectDiv>
      <Row>
        <CommonButton bgColor="white" txtColor="black" text="10:00" />
        <CommonButton bgColor="white" txtColor="black" text="10:30" />
        <CommonButton bgColor="white" txtColor="black" text="11:00" />
        <CommonButton bgColor="white" txtColor="black" text="11:30" />
      </Row>
      <Row>
        <CommonButton bgColor="white" txtColor="black" text="12:00" />
        <CommonButton bgColor="#073a29" txtColor="white" text="12:30" />
        <CommonButton bgColor="white" txtColor="black" text="13:00" />
        <CommonButton bgColor="white" txtColor="black" text="13:30" />
      </Row>
      <Row>
        <CommonButton bgColor="white" txtColor="black" text="14:00" />
        <CommonButton bgColor="white" txtColor="black" text="14:30" />
        <CommonButton bgColor="white" txtColor="black" text="15:00" />
        <CommonButton bgColor="#d8dfdd" txtColor="white" text="15:30" />
      </Row>
      <Row>
        <CommonButton bgColor="white" txtColor="black" text="16:00" />
        <CommonButton bgColor="white" txtColor="black" text="16:30" />
        <CommonButton bgColor="#d8dfdd" txtColor="white" text="17:00" />
        <CommonButton bgColor="#d8dfdd" txtColor="white" text="17:30" />
      </Row>
      <Row>
        <CommonButton bgColor="white" txtColor="black" text="18:00" />
        <CommonButton bgColor="white" txtColor="black" text="18:30" />
        <CommonButton bgColor="white" txtColor="black" text="19:00" />
        <CommonButton bgColor="white" txtColor="black" text="19:30" />
      </Row>
    </TimeSelectDiv>
  );
};

const TimeSelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #f3f5f7;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  padding: 8px 8px 0 8px;
  margin-bottom: 32px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;

  button {
    font-size: 12px;
    line-height: 18px;
    font-family: "Pretendard-Regular";
    flex: 1;
  }
`;
