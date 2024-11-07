import styled from "styled-components";
import CommonBox from "../common/CommonBox";
import HostelItem from "./HostelItem";

export default function ReservationHostel() {
  const data = [
    {
      id: 1,
      hostemNm: "CAFE 식물과 함께라면 ROOM-01aaaaaaaaaaaaaaaaaaaaaaaa",
      plantNm: "다육이 1호",
      check: "2024. 10. 27 ~ 2024. 10. 28",
    },
    {
      id: 2,
      hostemNm: "CAFE 식물과 함께라면 ROOM-01",
      plantNm: "송승수 2호",
      check: "2024. 10. 27 ~ 2024. 10. 28",
    },
    {
      id: 3,
      hostemNm: "CAFE 식물과 삼양라면 ROOM-01",
      plantNm: "송승수 3호",
      check: "2024. 10. 27 ~ 2024. 10. 28",
    },
    {
      id: 4,
      hostemNm: "CAFE 식물과 신라면 ROOM-01",
      plantNm: "송승수 4호",
      check: "2024. 10. 27 ~ 2024. 10. 28",
    },
    {
      id: 5,
      hostemNm: "CAFE 식물과 참깨라면 ROOM-01",
      plantNm: "송승수 5호",
      check: "2024. 10. 27 ~ 2024. 10. 28",
    },
  ];

  return (
    <HostelWrapper>
      {data.map((item) => (
        <CommonBox>
          <HostelItem key={item.id} item={item} />
        </CommonBox>
      ))}
    </HostelWrapper>
  );
}

const HostelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
