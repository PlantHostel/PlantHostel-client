import styled from "styled-components";
import { BorderHeader } from "../../components/common/BorderHeader";
import { IconButton } from "../../components/common/IconButton";
import ArrowLeft from "../../assets/arrow-left.png";
import { MagazineDetailThumnail } from "../../components/magazine/MagazineDetailThumnail";
import { MagazineContent } from "../../components/magazine/MagazineContent";
import { AnotherMagazine } from "../../components/magazine/AnotherMagazine";
import ProfileImage from "../../assets/profile-image.png";
import MoreCircle from "../../assets/more-circle.png";
import moment from "moment";

export const MagazineDetail = () => {
  const magazine = {
    writer: "행복한집사89",
    createdAt: new Date(2024, 7, 29),
    likeCount: 390,
    viewCount: 1209,
  };

  return (
    <MagazineDetailContainer>
      <BorderHeader title="매거진" left={<IconButton icon={ArrowLeft} />} />
      <MagazineDetailThumnail />
      {/* content 부분 어떻게 처리해야 할지 생각해봐야 할듯 */}
      <MagazineContent />
      <SmallProfile>
        <div className="left-section">
          <img className="profile-image" src={ProfileImage}></img>
          <div className="info-section">
            <span className="nickname">{magazine.writer}</span>
            <div className="extra-info">
              <span>{moment(magazine.createdAt).format("YY.MM.DD")}</span>
              <span>좋아요 {magazine.likeCount.toLocaleString()}</span>
              <span>조회 {magazine.viewCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="more-circle">
          <img src={MoreCircle} alt="" />
        </div>
      </SmallProfile>
      <AnotherMagazine />
    </MagazineDetailContainer>
  );
};

const MagazineDetailContainer = styled.div`
  .thumnail {
    width: 100%;
    position: relative;
  }

  .thumnail img {
    width: calc(100% + 40px);
    margin: 0 -20px;
  }

  .buttons {
    display: flex;
    position: absolute;
    gap: 12px;
    bottom: 20px;
    right: 0px;
  }

  .buttons .heart,
  .buttons .upload {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
  }

  .buttons img {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

const SmallProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;

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
    display: flex;
    flex-direction: column;
  }

  .info_section .nickname {
    font-size: 14px;
    line-height: 20px;
  }

  .extra-info {
    display: flex;
    gap: 8px;
    color: #9ca3a0;
    font-size: 12px;
    line-height: 18px;
    font-family: "Pretendard-Regular";
  }

  .extra-info span::after {
    content: "·";
    margin-left: 8px;
  }

  .extra-info span:last-child::after {
    content: none;
  }

  .more-circle {
    cursor: pointer;
  }
`;
