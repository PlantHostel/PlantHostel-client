import styled from "styled-components";
import CheckIcon from "../../assets/Stroke 3.png";

type CommonCheckboxProps = {
  id: string;
  type?: string;
  label: string;
};

export default function CommonCheckbox({
  id,
  type = "square",
  label,
}: CommonCheckboxProps) {
  return (
    <StyledCheckbox type={type}>
      <input type="radio" id={id} name={label} />
      <label />
    </StyledCheckbox>
  );
}

const StyledCheckbox = styled.div<{ type: string }>`
  display: flex;
  align-items: center;

  input {
    position: relative;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #9ca3a0;
    border-radius: ${({ type }) => (type === "circle" ? "50%" : "4px")};
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #fff;
    outline: none;

    &:checked {
      border-color: #073a29;
    }

    &:checked::before {
      content: "";
      display: block;
      width: 9px;
      height: 7px;
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url(${CheckIcon});
    }
  }

  label {
    display: none;
  }
`;
