import styled from "styled-components";
import { HeaderLR } from "../../components/common/HeaderLR";
import FileLike from "../../assets/file-like.png";
import { Search } from "../../components/common/Search";
import { ButtonCarousel } from "../../components/common/ButtonCarousel";
import Title from "../../components/common/Title";
import { PlantImageOverlay } from "../../components/common/PlantImageOverlay";
import { useState } from "react";

export const PlantDictionary = () => {
  const icons = [{ image: FileLike }];

  const [selected, setSelected] = useState(0);

  const buttons = [
    { text: "인기식물" },
    { text: "다육" },
    { text: "잎" },
    { text: "나무" },
    { text: "꽃" },
    { text: "채소" },
    { text: "열매" },
  ];

  return (
    <PlantDictionaryContainer>
      <HeaderLR title="PLANT DICTIONARY" icons={icons} />
      <Search placeholder="어떤 식물의 정보를 알고싶나요?" />
      <ButtonCarousel buttons={buttons} state={{ selected, setSelected }} />
      {selected === 0 ? (
        <>
          <div className="label-title">다육</div>
          <BestPlants>
            <PlantImageOverlay />
            <PlantImageOverlay />
            <PlantImageOverlay />
          </BestPlants>
          <div className="label-title">잎</div>
          <BestPlants>
            <PlantImageOverlay />
            <PlantImageOverlay />
            <PlantImageOverlay />
          </BestPlants>
          <div className="label-title">나무</div>
          <BestPlants>
            <PlantImageOverlay />
            <PlantImageOverlay />
            <PlantImageOverlay />
          </BestPlants>
          <div className="label-title">꽃</div>
          <BestPlants>
            <PlantImageOverlay />
            <PlantImageOverlay />
            <PlantImageOverlay />
          </BestPlants>
          <div className="label-title">채소</div>
          <BestPlants>
            <PlantImageOverlay />
            <PlantImageOverlay />
            <PlantImageOverlay />
          </BestPlants>
          <div className="label-title">열매</div>
          <BestPlants>
            <PlantImageOverlay />
            <PlantImageOverlay />
            <PlantImageOverlay />
          </BestPlants>
        </>
      ) : (
        <>
          <BestPlants>
            <PlantImageOverlay />
            <PlantImageOverlay />
            <PlantImageOverlay />
          </BestPlants>
          <BestPlants>
            <PlantImageOverlay />
            <PlantImageOverlay />
            <PlantImageOverlay />
          </BestPlants>
          <BestPlants>
            <PlantImageOverlay />
          </BestPlants>
        </>
      )}
    </PlantDictionaryContainer>
  );
};

const PlantDictionaryContainer = styled.div`
  .button-carousel {
    margin-bottom: 24px;
  }

  .label-title {
    margin-bottom: 8px;
    margin-top: 16px;
  }
`;

const BestPlants = styled.div`
  display: flex;
  gap: 8px;
`;
