import styled from "styled-components";
import { FeatureButton } from "./FeatureButton";

interface ButtonSectionProps {
  buttons: {
    image: string;
    label: string;
  }[];
}

export const ButtonSection = ({ buttons }: ButtonSectionProps) => {
  const firstRow = buttons.slice(0, 4);
  const secondRow = buttons.slice(4);

  return (
    <ButtonSectionDiv className="button-section">
      <ButtonRow>
        {firstRow.map((button, index) => (
          <FeatureButton key={index} icon={button.image} label={button.label} />
        ))}
      </ButtonRow>
      <ButtonRow>
        {secondRow.map((button, index) => (
          <FeatureButton key={index} icon={button.image} label={button.label} />
        ))}
      </ButtonRow>
    </ButtonSectionDiv>
  );
};

const ButtonSectionDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;
