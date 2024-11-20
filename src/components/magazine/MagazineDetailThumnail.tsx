import styled from "styled-components";
import Thumnail from "../../assets/magazine-thumnail.png";
import EmptyHeart from "../../assets/heart.png";
import Upload from "../../assets/upload.png";
import RedHeart from "../../assets/red-heart.png";
import { useState } from "react";

export const MagazineDetailThumnail = () => {
  const [like, setLike] = useState(false);

  const clickLikeButton = () => {
    setLike((prev) => !prev);
  };

  return (
    <ThumnailContainer>
      <img src={Thumnail} />
      <div className="buttons">
        <div className="heart" onClick={clickLikeButton}>
          <img src={like ? EmptyHeart : RedHeart} />
        </div>
        <div className="upload">
          <img src={Upload} />
        </div>
      </div>
    </ThumnailContainer>
  );
};

const ThumnailContainer = styled.div`
  width: 100%;
  position: relative;

  img {
    width: calc(100% + 40px);
    margin: 0 -20px;
  }

  .buttons {
    display: flex;
    position: absolute;
    gap: 12px;
    bottom: 20px;
    right: 0px;
  }

  .buttons .heart,
  .buttons .upload {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
  }

  .buttons img {
    width: 24px;
    height: 24px;
  }
`;
