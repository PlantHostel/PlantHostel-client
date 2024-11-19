import styled from "styled-components";
import FilledStar from "../../assets/filled-star.png";
import EmptyStar from "../../assets/empty-star.png";
import DropPlets from "../../assets/droplets.png";
import { PlantCharacter } from "./PlantCharacter";
import Ruler from "../../assets/ruler.png";
import LightBulb from "../../assets/lightbulb.png";
import Thermometer from "../../assets/thermometer.png";
import CactusImage from "../../assets/cactus.png";
import TulipImage from "../../assets/tulip.png";
import MonsteraImage from "../../assets/monstera.png";

interface MyPlantItemProps {
  item: {
    isRepresent: boolean;
    name: string;
    species: string;
    watering: string;
    size: string;
    light: string;
    temperature: string;
  };
}

export const MyPlantItem = ({ item }: MyPlantItemProps) => {
  return (
    <MyPlantContainer species={item.species}>
      <div className="card-header">
        <div className="header-left">
          <span className="plant-name">{item.name}</span>
          <span className="plant-species">{item.species}</span>
        </div>
        <div className="header-right">
          <div className="circle">
            <img src={item.isRepresent ? FilledStar : EmptyStar} />
          </div>
        </div>
      </div>
      <PlantCharacter
        image={DropPlets}
        label="Watering"
        content={item.watering}
      />
      <PlantCharacter image={Ruler} label="Size" content={item.size} />
      <PlantCharacter image={LightBulb} label="Light" content={item.light} />
      <PlantCharacter
        image={Thermometer}
        label="Temp."
        content={`${item.temperature}ºC`}
      />
    </MyPlantContainer>
  );
};

const MyPlantContainer = styled.div<{
  species: string;
}>`
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${({ species }) => getBackgroundImage(species)});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 16px;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .header-left {
    display: flex;
    gap: 10px;
  }

  .header-left .plant-name {
    font-size: 24px;
    line-height: 34px;
    color: white;
  }

  .header-left .plant-species {
    font-family: "Pretendard-Regular";
    display: flex;
    align-items: flex-end;
    font-size: 18px;
    line-height: 26px;
    color: white;
  }

  .header-right .circle {
    padding: 6px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    border-radius: 100%;
    cursor: pointer;
  }

  .header-right .circle img {
    width: 17px;
    height: 16px;
  }
`;

const getBackgroundImage = (species: string) => {
  switch (species) {
    case "선인장":
      return CactusImage;
    case "튤립":
      return TulipImage;
    case "몬스테라":
      return MonsteraImage;
  }
};
