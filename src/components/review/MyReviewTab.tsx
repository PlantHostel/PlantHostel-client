import styled from "styled-components";
import { CommonButton } from "../common/CommonButton";
import BeforeReviewItems from "./BeforeReviewItems";
import AfterReviewItems from "./AfterReviewItems";

export default function MyReviewTab() {
  const tabArr = [
    { name: "작성 전(70)", content: <BeforeReviewItems /> },
    { name: "작성 후(20)", content: <AfterReviewItems /> },
  ];

  return (
    <ReviewInfoTab>
      <ButtonSection>
        {tabArr.map((tab, index) => (
          <CommonButton key={index} text={tab.name} bgColor="#117956" />
        ))}
      </ButtonSection>
      {tabArr[1].content}
    </ReviewInfoTab>
  );
}

const ReviewInfoTab = styled.div`
  margin-top: 24px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;

  button {
    padding: 8px;
    font-size: 12px;
    line-height: 18px;
    width: 54px;
    height: 18px;
    white-space: nowrap;
  }

  button:nth-child(2) {
    background-color: white;
    border: 1px solid #117956;
    color: #117956;
  }
`;
