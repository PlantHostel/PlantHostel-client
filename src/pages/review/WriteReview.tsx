import styled from "styled-components";
import { BorderHeader } from "../../components/common/BorderHeader";
import { IconButton } from "../../components/common/IconButton";
import ArrowLeft from "../../assets/arrow-left.png";
import CartImage from "../../assets/cart.png";
import CommonBox from "../../components/common/CommonBox";
import PlantImage from "../../assets/review-image.png";
import { InfoText } from "../../components/common/InfoText";
import moment from "moment";
import Title from "../../components/common/Title";
import CommonCheckbox from "../../components/common/CommonCheckbox";
import { MarkStarRate } from "../../components/review/MarkStarRate";
import { Textarea } from "../../components/common/Textarea";
import { CommonButton } from "../../components/common/CommonButton";

export const WriteReview = () => {
  const item = {
    productNm: "[그린애] 수중식물 화분 포함 1종",
    deliveryDate: new Date(2024, 9, 17),
    dueDate: new Date(2024, 10, 31),
  };

  return (
    <WriteReviewContainer>
      <BorderHeader
        title="리뷰 작성"
        left={<IconButton icon={ArrowLeft} />}
        right={<IconButton icon={CartImage} alarmColor="#073a29" count={4} />}
      />
      <CommonBox>
        <InfoWrapper>
          <img className="item-img" src={PlantImage} />
          <div className="item-info">
            <InfoText
              label="상품명"
              value={item.productNm}
              wordBreak="nowrap"
            />
            <InfoText
              label="배송일자"
              value={moment(item.deliveryDate).format("YYYY.MM.DD")}
              wordBreak="nowrap"
            />
            <br />
            <InfoText
              label="작성기한"
              value={`${moment(item.dueDate).format("YYYY.MM.DD")} 까지`}
              wordBreak="nowrap"
            />
          </div>
        </InfoWrapper>
      </CommonBox>
      <Title title="상품 평가" />
      <CommonBox>
        <div className="text">전체적인 평점을 입력해주세요</div>
        <MarkStarRate />
        <QuestionDiv>
          <div className="text question">내구성은 어떠한가요?</div>
          <div className="flex-column">
            <div className="flex">
              <CommonCheckbox
                id="durability"
                type="circle"
                label="durability"
              />
              <span className="text">아주 만족해요</span>
            </div>
            <div className="flex">
              <CommonCheckbox
                id="durability"
                type="circle"
                label="durability"
              />
              <span className="text">보통이에요</span>
            </div>
            <div className="flex">
              <CommonCheckbox
                id="durability"
                type="circle"
                label="durability"
              />
              <span className="text">만족스럽지 않아요</span>
            </div>
          </div>
        </QuestionDiv>
        <QuestionDiv>
          <div className="text question">사용해보니 어떠한가요?</div>
          <div className="flex-column">
            <div className="flex">
              <CommonCheckbox id="feeling" type="circle" label="feeling" />
              <span className="text">아주 만족해요</span>
            </div>
            <div className="flex">
              <CommonCheckbox id="feeling" type="circle" label="feeling" />
              <span className="text">보통이에요</span>
            </div>
            <div className="flex">
              <CommonCheckbox id="feeling" type="circle" label="feeling" />
              <span className="text">만족스럽지 않아요</span>
            </div>
          </div>
        </QuestionDiv>
        <div className="text question">자세한 리뷰 작성</div>
        <Textarea value="마음에 들어요! 생각했던 것보다 사이즈가 살짝 큰 감이 있어 공간이 부족하긴 하지만, 미관 상 너무 이뻐서 거실에 두면 딱 좋을 것 같네요!! 만족합니다 이쁘게 잘 키워볼게요 :)" />
        <ButtonSection>
          <CommonButton text="작성 완료" />
        </ButtonSection>
      </CommonBox>
    </WriteReviewContainer>
  );
};

const WriteReviewContainer = styled.div`
  .title {
    margin-top: 24px;
  }

  .text {
    color: #25322b;
    font-size: 12px;
    line-height: 18px;
  }

  .question {
    margin-bottom: 8px;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .flex input[type="radio"] {
    width: 15px;
    height: 15px;
  }

  .mark-star {
    padding: 8px 0 12px;
  }

  textarea {
    font-size: 12px;
    line-height: 18px;
    font-family: "Pretendard-Regular";
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
  position: relative;

  .item-img {
    width: 70px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
`;

const QuestionDiv = styled.div`
  padding-bottom: 12px;
`;

const ButtonSection = styled.div`
  display: flex;
  margin-top: 24px;

  button {
    flex: 1;
  }
`;
