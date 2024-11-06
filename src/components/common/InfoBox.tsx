import styled from "styled-components";
import { InfoText } from "./InfoText";

interface InfoBoxProps {
  img: string;
  data: { id: number; label: string; value: string }[];
  wordBreak: string;
}

export const InfoBox = ({ img, data, wordBreak }: InfoBoxProps) => {
  return (
    <Info>
      <Box>
        <div className="info-image">
          <img src={img} alt="" />
        </div>
        <div>
          {data.map((item) => (
            <InfoText
              key={item.id}
              label={item.label}
              value={item.value}
              wordBreak={wordBreak}
            />
          ))}
        </div>
      </Box>
    </Info>
  );
};

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const Box = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 6px;

  .info-image {
    margin-right: 20px;
  }
`;
