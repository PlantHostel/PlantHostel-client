import { BorderHeader } from "../components/common/BorderHeader";
import { IconButton } from "../components/common/IconButton";
import LeftArrow from "../assets/arrow-left.png";
import styled from "styled-components";
import InputLabel from "../components/common/InputLabel";
import { Input } from "../components/common/Input";
import { CommonButton } from "../components/common/CommonButton";
import { Select } from "../components/common/Select";
import Camera from "../assets/Camera.png";
import Plus from "../assets/Plus.png";
import Search from "../assets/Search.png";
import { InsertImage } from "../components/common/InsertImage";

export default function RegistrationPlant() {
  const sizeData = [
    {
      id: "0",
      text: "대",
      value: "large",
    },
    {
      id: "1",
      text: "중",
      value: "medium",
    },
    {
      id: "2",
      text: "소",
      value: "small",
    },
  ];

  const yearData = [
    {
      id: 0,
      text: "2024",
      value: "2024",
    },
    {
      id: 1,
      text: "2023",
      value: "2023",
    },
    {
      id: 2,
      text: "2022",
      value: "2022",
    },
    {
      id: 3,
      text: "2021",
      value: "2021",
    },
    {
      id: 4,
      text: "2020",
      value: "2020",
    },
  ];

  function test1(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }
  return (
    <div>
      <BorderHeader
        title="반려식물 등록"
        left={<IconButton icon={LeftArrow} />}
      />
      <ResTitle>
        안녕하세요 <span className="res-user">행복한집사</span>님,
        <br />
        소중한 반려식물의 정보를 입력해주세요!
      </ResTitle>

      <ResForm onSubmit={test1}>
        <div>
          <InputLabel
            labelName="반려식물의 이름을 입력해주세요"
            htmlFor="plantName"
          />
          <Input
            type="text"
            name="plantName"
            id="plantName"
            placeholder="10자 이내로 작성해주세요."
          />
        </div>
        <div>
          <InputLabel labelName="반려식물의 사진을 등록해주세요" />
          <ImageSection>
            <InsertImage type="circle" />
          </ImageSection>
        </div>
        <div>
          <InputLabel labelName="품종을 입력해주세요" htmlFor="plantKind" />
          <KindLabel>
            <Input
              type="text"
              name="plantKind"
              id="plantKind"
              placeholder="품종을 선택해주세요"
            />
            <img src={Search} />
          </KindLabel>
        </div>
        <div>
          <InputLabel labelName="분양일자를 입력해주세요" />
          <DateLabel>
            <Select
              id="plantYear"
              name="plantYear"
              placeholder="년"
              data={yearData}
            />
            <Input
              type="text"
              name="plantMonth"
              id="plantMonth"
              placeholder="월"
            />
            <Input
              type="text"
              name="plantDate"
              id="plantDate"
              placeholder="일"
            />
          </DateLabel>
        </div>

        <div>
          <InputLabel labelName="사이즈를 선택해주세요" />
          <SizeOptions>
            {sizeData.map((size) => (
              <div className="radio-option" key={size.id}>
                <input
                  type="radio"
                  value={size.value}
                  name="plantSize"
                  id={size.id}
                />
                <label key={size.id} htmlFor={size.id}>
                  {size.text}
                </label>
              </div>
            ))}
          </SizeOptions>
        </div>
        <ButtonWrapper>
          <CommonButton
            text="취소"
            size="medium"
            bgColor="rgba(255, 255, 255, 0.15);"
            txtColor="#767676"
          ></CommonButton>
          <CommonButton
            text="등록완료"
            size="medium"
            type="submit"
          ></CommonButton>
        </ButtonWrapper>
      </ResForm>
    </div>
  );
}

const ResTitle = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.025em;
  margin-bottom: 30px;
  .res-user {
    font-family: "Pretendard-SemiBold";
  }
`;

const ResForm = styled.form`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 52px;
  .res-subtitle {
    font-size: 16px;
  }
`;
const KindLabel = styled.div`
  position: relative;
  img {
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 152px;
  .img-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  }

  .plus {
    position: absolute;
    right: 30%;
    bottom: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: gray;
  }
`;

const DateLabel = styled.div`
  display: flex;
  gap: 8px;
`;

const SizeOptions = styled.div`
  display: flex;
  justify-content: space-between;
  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + label {
    display: flex;
    cursor: pointer;
    box-sizing: border-box;
    height: 53px;
    width: 111.33px;
    line-height: 18px;
    padding: 13px 20px;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
  }

  input[type="radio"] + label {
    background-color: rgba(255, 255, 255, 0.15);
    color: #000000;
  }

  input[type="radio"]:checked + label {
    background-color: #073a29;
    color: #fff;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
