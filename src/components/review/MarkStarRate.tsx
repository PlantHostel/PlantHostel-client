import { useEffect, useState } from "react";
import styled from "styled-components";
import FilledStar from "../../assets/filled-star.png";
import EmptyStar from "../../assets/empty-star.png";

export const MarkStarRate = () => {
  const starRateState: Array<string> = [];

  const [starRate, setStarRate] = useState(starRateState);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      starRateState.push("empty");
    }
    setStarRate(starRateState);
  }, []);

  function clickStarRate(idx: number) {
    const tmpStarRate = [];

    for (let i = 0; i < 5; i++) {
      if (i < idx) {
        tmpStarRate.push("filled");
      } else {
        tmpStarRate.push("empty");
      }
    }

    setStarRate(tmpStarRate);
  }

  return (
    <MarkStarContainer className="mark-star">
      <div className={starRate[0]} onClick={() => clickStarRate(1)}></div>
      <div className={starRate[1]} onClick={() => clickStarRate(2)}></div>
      <div className={starRate[2]} onClick={() => clickStarRate(3)}></div>
      <div className={starRate[3]} onClick={() => clickStarRate(4)}></div>
      <div className={starRate[4]} onClick={() => clickStarRate(5)}></div>
    </MarkStarContainer>
  );
};

const MarkStarContainer = styled.div`
  display: flex;

  div {
    width: 29px;
    height: 29px;
    cursor: pointer;
  }

  .filled {
    background: url(${FilledStar}) no-repeat center;
  }

  .empty {
    background: url(${EmptyStar}) no-repeat center;
  }
`;
