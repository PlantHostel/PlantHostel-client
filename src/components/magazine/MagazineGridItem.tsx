import styled from "styled-components";

interface MagazineProps {
  magazine: {
    image: string;
    title: string;
  };
}

export const MagazineGridItem = ({ magazine }: MagazineProps) => {
  return (
    <MagazinegridContainer>
      <div className="magazine-image">
        <img src={magazine.image} />
      </div>
      <div className="magazine-title">{magazine.title}</div>
    </MagazinegridContainer>
  );
};

const MagazinegridContainer = styled.div`
  .magazine-image {
    width: 170px;
    height: 170px;
    border-radius: 6px;
    margin-bottom: 4px;
  }

  .magazine-title {
    font-size: 12px;
    line-height: 18px;
    font-family: "Pretendard-Regular";
    color: #25322b;
  }
`;
