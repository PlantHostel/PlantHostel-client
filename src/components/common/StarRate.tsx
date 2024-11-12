import styled from "styled-components";
import yellowstar from "../../assets/Star 22.png";
import emptystar from "../../assets/Star 26.png";

interface StarRateProps {
  rate: number;
}

export const StarRate = ({ rate }: StarRateProps) => {
  const totalStars = 5;

  return (
    <StarDiv>
      {Array.from({ length: totalStars }, (_, index) => {
        {
          return index < rate ? (
            <img key={index} src={yellowstar} alt="star" />
          ) : (
            <img key={index} src={emptystar} alt="star" />
          );
        }
      })}
    </StarDiv>
  );
};

const StarDiv = styled.div`
  img {
    width: 12.18px;
    height: 12.18px;
    padding: 0 1px;
  }
`;
