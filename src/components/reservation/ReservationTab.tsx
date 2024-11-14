import styled from "styled-components";
import ReservationHostel from "./ReservationHostel";

export default function ReservationTab() {
  const tabArr = [
    { name: "호텔 예약", content: <ReservationHostel /> },
    { name: "병원 예약", content: "병원 탭" },
  ];

  return (
    <ReservationInfoTab>
      <TabBox>
        {tabArr.map((tab, index) => (
          <Tab key={index}>{tab.name}</Tab>
        ))}
      </TabBox>
      {tabArr[0].content}
    </ReservationInfoTab>
  );
}

const ReservationInfoTab = styled.div`
  min-height: 632px;
`;

const TabBox = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Tab = styled.div`
  width: 175px;
  padding: 19px 62px;
  font-size: 14px;
  color: #073a29;
  white-space: nowrap;
  cursor: pointer;
  &:first-child {
    border-bottom: 2px solid #073a29;
  }
`;
