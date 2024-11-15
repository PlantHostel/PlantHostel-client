import { BorderHeader } from "../../components/common/BorderHeader";
import { IconButton } from "../../components/common/IconButton";
import ArrowLeft from "../../assets/arrow-left.png";
import styled from "styled-components";
import ReviewTab from "../../components/common/store/ReviewTab";
import { StarRate } from "../../components/common/StarRate";
import { ReviewItem } from "../../components/common/store/ReviewItem";
import ReviewImage from "../../assets/review-image.png";
import { CommonButton } from "../../components/common/CommonButton";

export const Reviews = () => {
  const reviews = [
    {
      writer: "행복한집사89",
      createdAt: new Date(2024, 7, 29),
      images: [
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
      ],
      rate: 4,
      content:
        "최근에 인테리어를 변경하면서 너무 과하지 않게 적당히 화사한 플랜테리어 장식을 하고 싶어서 찾아보다가 구매하게 되었습니다. 가격 대비 사이즈나 퀄리티가 좋아서 놀랐어요. 깔끔하니 좋네요!!",
    },
    {
      writer: "행복한집사89",
      createdAt: new Date(2024, 7, 29),
      images: [
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
      ],
      rate: 4,
      content:
        "최근에 인테리어를 변경하면서 너무 과하지 않게 적당히 화사한 플랜테리어 장식을 하고 싶어서 찾아보다가 구매하게 되었습니다. 가격 대비 사이즈나 퀄리티가 좋아서 놀랐어요. 깔끔하니 좋네요!!",
    },
    {
      writer: "행복한집사89",
      createdAt: new Date(2024, 7, 29),
      images: [
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
      ],
      rate: 4,
      content:
        "최근에 인테리어를 변경하면서 너무 과하지 않게 적당히 화사한 플랜테리어 장식을 하고 싶어서 찾아보다가 구매하게 되었습니다. 가격 대비 사이즈나 퀄리티가 좋아서 놀랐어요. 깔끔하니 좋네요!!",
    },
    {
      writer: "행복한집사89",
      createdAt: new Date(2024, 7, 29),
      images: [
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
        ReviewImage,
      ],
      rate: 4,
      content:
        "최근에 인테리어를 변경하면서 너무 과하지 않게 적당히 화사한 플랜테리어 장식을 하고 싶어서 찾아보다가 구매하게 되었습니다. 가격 대비 사이즈나 퀄리티가 좋아서 놀랐어요. 깔끔하니 좋네요!!",
    },
  ];

  return (
    <ReviewsContainer>
      <BorderHeader title="상품 리뷰" left={<IconButton icon={ArrowLeft} />} />
      <NavSection>
        <div className="button-section">
          <CommonButton text="평점순" />
          <CommonButton text="최신순" />
        </div>
        <div className="star-review-cnt">
          <StarRate rate={4} />
          <span>(112)</span>
        </div>
      </NavSection>
      {reviews.map((review, index) => (
        <ReviewItem review={review} key={index} />
      ))}
    </ReviewsContainer>
  );
};

const ReviewsContainer = styled.div``;

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button-section {
    display: flex;
    gap: 8px;
  }

  .button-section button {
    padding: 8px;
    font-size: 12px;
    line-height: 18px;
    width: 31px;
    height: 18px;
    white-space: nowrap;
  }

  .button-section button:first-child {
    background-color: #117956;
  }

  .button-section button:last-child {
    background-color: white;
    color: #117956;
    border: 1px solid #117956;
  }

  .star-review-cnt {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-family: "Pretendard-Regular";
    gap: 2px;
  }
`;
