import styled from "styled-components";
import { BorderHeader } from "../../components/common/BorderHeader";
import ArrowLeft from "../../assets/arrow-left.png";
import CartImage from "../../assets/cart.png";
import { IconButton } from "../../components/common/IconButton";
import { InquiryItem } from "../../components/inquiry/InquiryItem";
import moment from "moment";

export const InquiryDetail = () => {
  const data = {
    id: 1,
    productNm: "[그린애] 수중식물 화분 포함 1종",
    createdAt: new Date(2024, 9, 17),
    isReply: true,
    replyContent:
      "안녕하세요 고객님! 언제나 고객님을 생각하는 그린애입니다. 해당제품은 이미 출고가 된 상태이며, 곧 운송장 번호가 조회될 예정입니다. 저희 제품을 구매해주셔서 감사드리며, 보다 나은 서비스를 제공할 수 있도록 최선을 다하는 그린애가 되겠습니다. 감사합니다!",
    replyCreatedAt: new Date(2024, 9, 18),
  };

  return (
    <>
      <BorderHeader
        title="내 문의"
        left={<IconButton icon={ArrowLeft} />}
        right={<IconButton icon={CartImage} alarmColor="#073a29" count={4} />}
      />
      <InquiryItem item={data} />
      <ReplyContainer>
        <div className="label">문의내용</div>
        <div className="content">
          도착 예정일이 언제인지 궁금합니다. 빠른 답변 부탁드립니다. 배송 시작
          일정도 공유 부탁드립니다. 감사합니다.
        </div>
        {data.isReply && (
          <div className="reply-container">
            <div className="reply-label">└ 답변내용</div>
            <div className="reply-content">{data.replyContent}</div>
            <div className="reply-createdAt">
              {moment(data.replyCreatedAt).format("YYYY.MM.DD")}
            </div>
          </div>
        )}
      </ReplyContainer>
    </>
  );
};

const ReplyContainer = styled.div`
  padding: 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);

  .label,
  .content,
  .reply-label,
  .reply-content,
  .reply-createdAt {
    font-size: 12px;
    line-height: 18px;
    font-family: "Pretendard-Regular";
  }

  .content,
  .reply-content,
  .reply-createdAt {
    word-break: keep-all;
    color: #5d6762;
  }

  .reply-container {
    padding: 12px;
    margin-top: 16px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
  }

  .reply-createdAt {
    margin-top: 12px;
  }
`;
