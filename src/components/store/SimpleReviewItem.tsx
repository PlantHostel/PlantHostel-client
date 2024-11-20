import styled from "styled-components";
import ReviewImage from "../../assets/review-image.png";
import { StarRate } from "../common/StarRate";
import moment from "moment";

interface SimpleReviewItemProps {
  review: {
    writer: string;
    rate: number;
    content: string;
    createdAt: Date;
  };
}

export const SimpleReviewItem = ({ review }: SimpleReviewItemProps) => {
  return (
    <SimpleReview>
      <img src={ReviewImage} alt="리뷰 이미지" />
      <div className="review-text">
        <div className="writer-star">
          <div className="writer">{review.writer}</div>
          <StarRate rate={4} />
        </div>
        <div className="content">{review.content}</div>
        <div className="created-at">
          {moment(review.createdAt).format("YYYY . MM . DD")}
        </div>
      </div>
    </SimpleReview>
  );
};

const SimpleReview = styled.div`
  display: flex;
  padding: 6px 0px;

  .review-text {
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
  }

  .writer-star {
    display: flex;
    justify-content: space-between;
  }

  .content {
    color: #25322b;
    font-size: 13px;
    line-height: 18px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .created-at {
    color: #9ca3a0;
    font-size: 12px;
    line-height: 18px;
    font-family: "Pretendard-Regular";
  }
`;
