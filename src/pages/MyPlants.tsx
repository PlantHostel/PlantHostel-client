import styled from "styled-components";
import { HeaderLR } from "../components/common/HeaderLR";
import { MyPlantItem } from "../components/mypage/MyPlantItem";

export const MyPlants = () => {
  const plants = [
    {
      isRepresent: true,
      name: "튼튼이",
      species: "선인장",
      watering: "1주에 한번",
      size: "small",
      light: "A lot",
      temperature: "15-24",
    },
    {
      isRepresent: false,
      name: "봄이",
      species: "튤립",
      watering: "1주에 세번",
      size: "medium",
      light: "medium",
      temperature: "10-17",
    },
    {
      isRepresent: false,
      name: "모스",
      species: "몬스테라",
      watering: "1주에 두번",
      size: "large",
      light: "medium",
      temperature: "15-24",
    },
  ];

  return (
    <MyPlantsContainer>
      <HeaderLR title="MY PLANTS" />
      {plants.map((plant) => (
        <MyPlantItem item={plant} />
      ))}
    </MyPlantsContainer>
  );
};

const MyPlantsContainer = styled.div`
  header {
    margin-bottom: 24px;
  }
`;
