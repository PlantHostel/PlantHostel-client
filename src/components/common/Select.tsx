import styled from "styled-components";
import SelectArrow from "../../assets/select-arrow.png";

interface SelectProps {
  name: string;
  id: string;
  placeholder: string;
  data: { id: number; text: string; value: string }[];
}

export const Select = ({ name, id, placeholder, data }: SelectProps) => {
  return (
    <SelectSection>

      <select name={name} id={id} required defaultValue="">
        <option style={{ color: "#767676" }} disabled hidden value="">
          {placeholder}
        </option>
        {data.map((item) => (
          <option key={item.id} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      <img src={SelectArrow} />
    </SelectSection>
  );
};

const SelectSection = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  select {
    display: flex;
    align-items: center;
    appearance: none;
    box-sizing: border-box;
    height: 52px;
    border: 1px solid #dee3e1;
    background-color: #f1f3f5;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.15);
    width: 100%;
    padding: 0px 20px;
    font-family: "Pretendard-Regular";
    font-size: 15px;
    line-height: 22px;

    &:required:invalid {
      color: #767676;
    }
  }
  
  img {
    width: 12.84px;
    height: 8px;
    position: absolute;
    top: 22px;
    right: 24px;
  }
`;
