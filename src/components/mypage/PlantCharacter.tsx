import styled from "styled-components";

interface PlantCharacterProps {
  image: string;
  label: string;
  content: string;
}

export const PlantCharacter = ({
  image,
  label,
  content,
}: PlantCharacterProps) => {
  return (
    <PlantCharacterContainer>
      <img src={image} />
      <div className="card-box-right">
        <span className="label">{label}</span>
        <span className="content">{content}</span>
      </div>
    </PlantCharacterContainer>
  );
};

const PlantCharacterContainer = styled.div`
  display: flex;
  width: 110px;
  align-items: center;
  padding: 4px 16px;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(8px);
  border-radius: 100px;
  margin-bottom: 16px;

  img {
    margin-right: 16px;
  }

  .card-box-right {
    display: flex;
    flex-direction: column;
  }

  .card-box-right .label {
    color: white;
    font-size: 15px;
    line-height: 22px;
  }

  .card-box-right .content {
    color: white;
    font-family: "Pretendard-Regular";
    font-size: 14px;
    line-height: 20px;
  }
`;
