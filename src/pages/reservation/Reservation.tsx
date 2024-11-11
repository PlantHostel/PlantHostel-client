import NotificationImage from "../../assets/notification.png";
import SettingImage from "../../assets/setting.png";
import ProfileImage from "../../assets/profile-image.png";
import Calendar from "react-calendar";
import styled from "styled-components";
import unchecked from "../../assets/unchecked.png";
import checked from "../../assets/checked.png";
import { HeaderLR } from "../../components/common/HeaderLR";
import { InfoBox } from "../../components/common/InfoBox";
import { Search } from "../../components/common/Search";
import Title from "../../components/common/Title";
import InputLabel from "../../components/common/InputLabel";
import InputBox from "../../components/common/InputBox";
import { Input } from "../../components/common/Input";
import { Select } from "../../components/common/Select";
import { Textarea } from "../../components/common/Textarea";
import { TimeSelect } from "../../components/reservation/TimeSelect";
import { CommonButton } from "../../components/common/CommonButton";

interface ReservationProps {
  type: string;
}

interface tileClassNameProps {
  date: Date;
  view: string;
}

export const Reservation = ({ type }: ReservationProps) => {
  const unavailableDates = [new Date(2024, 10, 22), new Date(2024, 10, 23)]; // 예약 불가능한 날짜, 월 +1 해야하는거 주의

  const tileClassName = ({ date, view }: tileClassNameProps) => {
    if (view === "month") {
      if (
        unavailableDates.some(
          (unavailableDate) =>
            unavailableDate.toDateString() === date.toDateString()
        )
      ) {
        return "unavailable";
      }

      if (date.toDateString() === new Date().toDateString()) {
        return "today";
      }
    }
  };

  const memberData = [
    {
      id: 1,
      label: "닉네임",
      value: "ZZU_Hyeon888",
    },
    {
      id: 2,
      label: "전화번호",
      value: "010.8857.3679",
    },
    {
      id: 3,
      label: "이메일",
      value: "ssy9989@naver.com",
    },
  ];

  const plantData = [
    {
      id: 1,
      text: "튼튼이",
      value: "",
    },
    {
      id: 2,
      text: "서닌장",
      value: "",
    },
    {
      id: 3,
      text: "코쓱모쓱",
      value: "",
    },
  ];

  return (
    <ReservationWrap>
      <HeaderLR
        title="PLANT HOSTEL"
        icons={[NotificationImage, SettingImage]}
      />
      <Title title={type === "hospital" ? "병원 예약" : "호텔 예약"} />
      <InfoBox img={ProfileImage} data={memberData} />
      <Search placeholder="예약 장소를 선택해주세요" />
      <InputLabel labelName="예약자 성함" htmlFor="name" />
      <InputBox>
        <Input
          id="name"
          name="name"
          placeholder="예약자분 성함을 입력해주세요"
          type="text"
        />
      </InputBox>
      <InputLabel labelName="예약자 전화번호" htmlFor="hp" />
      <InputBox>
        <Input
          id="hp"
          name="hp"
          type="tel"
          placeholder="-제외 11자리를 입력해주세요"
        />
      </InputBox>
      <InputLabel labelName="반려식물 선택" />
      <InputBox>
        <Select
          placeholder="진료받을 반려식물을 선택해주세요"
          id="plant"
          name="plant"
          data={plantData}
        />
      </InputBox>
      <InputLabel labelName="반려식물 진단서" />
      <InputBox>
        <Textarea placeholder="반려식물의 진료 목적, 현재 상태를 자세히 적어주세요 ex) 잎의 색이 갈변하고 시들시들해요. 영양제를 충분히 줬는데도 수분이 없는 느낌이에요. 몬스테라 종이고 줄기는 3~4개 정도입니다. 사이즈에 맞는 화분인지는 잘 모르겠네요. 진단 필요합니다." />
      </InputBox>

      {type === "hospital" ? (
        <LabelBox>
          <div>방문일자를 선택해주세요</div>
        </LabelBox>
      ) : (
        <LabelBox>
          <div>보관기간을 선택해주세요</div>
        </LabelBox>
      )}

      <CalendarDiv>
        <Calendar
          calendarType="gregory"
          allowPartialRange={true}
          prevLabel="<"
          nextLabel=">"
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={true}
          formatDay={(locale, date) => String(date.getDate())}
          formatMonthYear={(locale, date) =>
            `${date.getFullYear()}.${date.getMonth() + 1}`
          }
          formatYear={(locale, date) => `${date.getFullYear()}`}
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString("en", { weekday: "short" })
          }
          tileClassName={tileClassName}
        ></Calendar>
      </CalendarDiv>

      {type === "hospital" ? (
        <LabelBox>
          <div>방문시간을 선택해주세요</div>
        </LabelBox>
      ) : (
        <LabelBox>
          <div>체크인 당일 방문시간을 선택해주세요</div>
        </LabelBox>
      )}

      <TimeSelect />

      <ul className="notice">
        <li>당일 픽업은 호텔 비용이 추가되지 않습니다.</li>
        <li>진료 시간 외의 방문은 상담이 어려울 수 있습니다.</li>
        <li>12시간 이상 진료 또는 호텔 이용시 시간 당 2,000원이 추가됩니다.</li>
        <li>반려식물 상태에 따라 진료 시간이 연장될 수 있습니다.</li>
        <li>자세한 문의사항은 해당 매장으로 문의해주세요.</li>
      </ul>

      <div className="policy-box">
        <input type="checkbox" id="policy" className="checkbox" />
        <label htmlFor="policy" className="policy">
          개인정보보호법에 따라 위와 같이 입력한 개인정보 수집 및 이용에
          동의합니다.
        </label>
      </div>

      <div className="flex">
        <CommonButton text="예약하기" />
      </div>
    </ReservationWrap>
  );
};

const ReservationWrap = styled.div`
  .notice {
    padding-left: 20px;
    margin-bottom: 16px;
  }

  .notice li {
    font-family: "Pretendard-Regular";
    font-size: 12px;
    line-height: 18px;
    color: #9ca3a0;
  }

  .policy-box {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .flex {
    display: flex;
    margin: 8px 0px 16px;

    button {
      flex: 1;
    }
  }

  .checkbox {
    appearance: none;
    cursor: pointer;
    border: 1px solid #dee3e1;
    width: 16px;
    margin: 0;
    height: 16px;
    border-radius: 50%;
    background: url(${unchecked}) no-repeat 50% #fafafa;

    &:checked {
      border: 1px solid #073a29;
      background: url(${checked}) no-repeat 50% #fafafa;
    }
  }

  .policy {
    font-size: 11px;
    margin-left: 4px;
    color: #9ca3a0;
    cursor: pointer;
    font-family: "Pretendard-Regular";
  }
`;

const LabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 8px;
`;

const CalendarDiv = styled.div`
  .react-calendar {
    margin-bottom: 32px;
  }

  .react-calendar__navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 52px;
    background-color: #073a29;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    font-family: "Pretendard-SemiBold";
    position: relative;
  }

  .react-calendar__navigation__prev-button {
    position: absolute;
    left: 110px;
  }

  .react-calendar__navigation__next-button {
    position: absolute;
    right: 110px;
  }

  .react-calendar__navigation button {
    color: white;
    background: none;
    border: none;
    font-size: 18px;
    line-height: 26px;
    cursor: pointer;
  }

  .react-calendar__viewContainer {
    background-color: #f3f5f7;
    font-size: 13px;
    line-height: 18px;
    height: 323px;
    font-family: "Pretendard-SemiBold";
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
    height: 46px;
    align-items: center;
    padding-top: 4px;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__weekdays__weekdays {
    background: #f3f5f7;
  }

  .react-calendar__month-view__weekdays__weekday--weekend:nth-of-type(1) {
    color: #b71c1c;
  }

  .react-calendar__month-view__weekdays__weekday--weekend:nth-of-type(7) {
    color: #004de3;
  }

  .react-calendar__month-view__days button {
    background: #f3f5f7;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 14px;
    height: 54px;
    font-size: 13px;
  }

  .react-calendar__month-view__days__day--neighboringMonth abbr {
    color: #9ca3a0;
  }

  .react-calendar__year-view__months__month,
  .react-calendar__decade-view__years__year,
  .react-calendar__century-view__decades__decade {
    background: #117956;
    cursor: pointer;
    color: white;
    border: 1px solid white;
    padding: 13px 14px;
    height: 54px;
    border-radius: 12px;
    font-size: 13px;
    line-height: 18px;
    font-family: "Pretendard-Regular";
  }

  .react-calendar__month-view__days__day.today {
    background: #117956;
    color: white;
    border-radius: 50%;
  }

  .react-calendar__month-view__days__day.unavailable {
    background: #d8dfdd;
    color: white;
  }
`;
