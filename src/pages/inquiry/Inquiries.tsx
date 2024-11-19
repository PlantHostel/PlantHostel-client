import styled from "styled-components";
import ArrowLeft from "../../assets/arrow-left.png";
import CartImage from "../../assets/cart.png";
import { BorderHeader } from "../../components/common/BorderHeader";
import { IconButton } from "../../components/common/IconButton";
import { InquiryItem } from "../../components/inquiry/InquiryItem";

export const Inquiries = () => {
  const data = [
    {
      id: 1,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      createdAt: new Date(2024, 9, 17),
      isReply: false,
    },
    {
      id: 2,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      createdAt: new Date(2024, 9, 17),
      isReply: false,
    },
    {
      id: 3,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      createdAt: new Date(2024, 9, 17),
      isReply: false,
    },
    {
      id: 4,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      createdAt: new Date(2024, 9, 17),
      isReply: false,
    },
    {
      id: 5,
      productNm: "[그린애] 수중식물 화분 포함 1종",
      createdAt: new Date(2024, 9, 17),
      isReply: false,
    },
  ];

  return (
    <>
      <BorderHeader
        title="문의내역"
        left={<IconButton icon={ArrowLeft} />}
        right={<IconButton icon={CartImage} count={4} alarmColor="#073a29" />}
      />
      {data.map((item, index) => {
        return <InquiryItem item={item} key={index} />;
      })}
    </>
  );
};
