import styled from "styled-components";
import PlantImage from "../../assets/info-plant.png";

export const PlantImageOverlay = () => {
  return (
    <OverlayContainer>
      <div className="img-conatiner">
        <img src={PlantImage} />
        <div className="overlay">
          <span className="plant-name">알로에베라</span>
        </div>
      </div>
    </OverlayContainer>
  );
};

const OverlayContainer = styled.div`
  .img-conatiner {
    position: relative;
  }

  img {
    object-fit: cover;
    width: 111.33px;
    height: 111.33px;
  }

  .overlay {
    width: 111.33px;
    height: 111.33px;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .plant-name {
    color: white;
    white-space: nowrap;
  }
`;
