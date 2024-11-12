import styled from "styled-components";
import { CommonButton } from "../common/CommonButton";
import BeforeReviewItems from "./BeforeReviewItems";

export default function ReviewTab() {
  const tabArr = [
    { name: "작성 전(70)", content: <BeforeReviewItems /> },
    { name: "작성 후(20)", content: "" },
  ];

  return (
    <ReviewInfoTab>
      <ButtonSection>
        {tabArr.map((tab, index) => (
          <CommonButton key={index} text={tab.name} />
        ))}
      </ButtonSection>
      {tabArr[0].content}
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
    height: 34px;
  }

  button:nth-child(2) {
    background-color: white;
    border: 1px solid #117956;
    color: #117956;
  }
`;
