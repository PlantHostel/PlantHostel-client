import { IconButton } from "../components/common/IconButton";
import LeftArrow from "../assets/arrow-left.png";
import CartImage from "../assets/cart.png";
import { BorderHeader } from "../components/common/BorderHeader";
import { InfoBox } from "../components/common/InfoBox";
import ProfileImage from "../assets/profile-image.png";
import ReviewTab from "../components/review/ReviewTab";

export const MyReview = () => {
  const data = [
    {
      id: 1,
      label: "닉네임",
      value: "ZZU_Hyeon888",
    },
    {
      id: 2,
      label: "리뷰평점",
      value: "4.8",
    },
    {
      id: 3,
      label: "작성 수",
      value: "20",
    },
  ];

  return (
    <>
      <BorderHeader
        title={"내 리뷰"}
        left={<IconButton icon={LeftArrow} />}
        right={<IconButton icon={CartImage} alarmColor="#073a29" count={4} />}
      />
      <InfoBox img={ProfileImage} data={data} />
      <ReviewTab />
    </>
  );
};
