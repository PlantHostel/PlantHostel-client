import styled from "styled-components";
import { HeaderLR } from "../../components/common/HeaderLR";
import UserCircle from "../../assets/user-circle.png";
import Notification from "../../assets/notification.png";
import { Search } from "../../components/common/Search";
import MagazineCarousel from "../../components/main/MagazineCarousel";
import Title from "../../components/common/Title";
import { GridSection } from "../../components/common/GridSection";
import MagazineImage1 from "../../assets/magazine-image1.png";
import MagazineImage2 from "../../assets/magazine-image2.png";
import MagazineImage3 from "../../assets/magazine-image3.png";
import MagazineImage4 from "../../assets/magazine-image4.png";
import { MagazineGridItem } from "../../components/magazine/MagazineGridItem";
import { WeeklyMagazineCarousel } from "../../components/magazine/WeeklyMagazineCarousel";

export const Magazine = () => {
  const icons = [
    {
      image: UserCircle,
    },
    {
      image: Notification,
    },
  ];

  const magazines = [
    {
      image: MagazineImage1,
      title: "아기자기한 식물들로 한껏 푸릇해진 인테리어 🌱",
    },
    {
      image: MagazineImage2,
      title: "밋밋한 선반을 가득채우는 싱그러운 향기 🌱",
    },
    {
      image: MagazineImage3,
      title: "초보 집사도 환영하는 생그러운 다육이 함께 키워볼까요? 🌱",
    },
    {
      image: MagazineImage4,
      title: "내 집의 작은 스튜디오 공간, 내 반려식물과 함께 🌱",
    },
  ];

  return (
    <>
      <HeaderLR title="MAGAZINE" icons={icons}></HeaderLR>
      <Search placeholder="필요한 정보를 검색해보세요!" />
      <MagazineCarousel />
      <Title title="알려드려요, 나의 플랜테리어🌳" />
      <GridSection>
        {magazines.map((magazine, index) => (
          <MagazineGridItem magazine={magazine} key={index} />
        ))}
      </GridSection>
      <WeeklyMagazine>
        <div className="label-en">Weekly Magazine</div>
        <div className="label-ko">플랜트호스텔이 픽한 주간 핫이슈</div>
        <WeeklyMagazineCarousel />
      </WeeklyMagazine>
    </>
  );
};

const WeeklyMagazine = styled.div`
  padding: 24px;
  margin: 24px -20px;
  background-color: #25322b;

  .label-en,
  .label-ko {
    color: white;
  }

  .label-en {
    font-size: 20px;
    line-height: 28px;
  }

  .label-ko {
    font-size: 14px;
    line-height: 20px;
  }
`;
