import styled from "styled-components";
import ProfileImage from "../../assets/profile-image.png";
import { StarRate } from "../common/StarRate";
import MoreCircle from "../../assets/more-circle.png";
import moment from "moment";
import { SummaryImage } from "../review/SummaryImage";

interface ReviewItemProps {
  review: {
    writer: string;
    createdAt: Date;
    images: string[];
    rate: number;
    content: string;
  };
}

export const ReviewItem = ({ review }: ReviewItemProps) => {
  return (
    <ReviewItemContainer>
      <ReviewHeader>
        <div className="left-section">
          <img className="profile-image" src={ProfileImage}></img>
          <div className="info-section">
            <span className="nickname">{review.writer}</span>
            <div className="star-create">
              <StarRate rate={review.rate} />
              <span className="created-at">
                {moment(review.createdAt).format("YYYY . MM . DD")}
              </span>
            </div>
          </div>
        </div>
        <div className="more-circle">
          <img src={MoreCircle} alt="" />
        </div>
      </ReviewHeader>
      <ReviewContent>
        <SummaryImage images={review.images} />
        <div className="content">{review.content}</div>
      </ReviewContent>
    </ReviewItemContainer>
  );
};

const ReviewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px;
  border-bottom: 1px solid #e8e8e8;

  &:last-child {
    border: none;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  .left-section {
    display: flex;
    align-items: center;
  }

  .profile-image {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 8px;
  }

  .info-section {
    margin-right: 8px;
  }

  .info_section .nickname {
    font-size: 14px;
    line-height: 20px;
  }

  .star-create {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .star-create .created-at {
    font-family: "Pretendard-Regular";
    font-size: 12px;
    color: #9ca3a0;
  }

  .more-circle {
    cursor: pointer;
  }
`;

const ReviewContent = styled.div`
  .summary-images {
    display: flex;
    position: relative;
    width: fit-content;
    margin-bottom: 12px;
  }

  .summary-images img {
    width: 50px;
    height: 50px;
    position: relative;
  }

  .summary-images .extra-image {
    position: absolute;
    width: 50px;
    height: 50px;
    right: 0;
  }

  .content {
    font-size: 14px;
    line-height: 20px;
    font-family: "Pretendard-Regular";
    color: #25322b;
    white-space: normal;
    word-break: keep-all;
  }
`;
