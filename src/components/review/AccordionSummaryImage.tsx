import styled from "styled-components";

interface AccordionSummaryImageProps {
  images: string[];
}

export const AccordionSummaryImage = ({
  images,
}: AccordionSummaryImageProps) => {
  const maxVisible = 4;

  return (
    <AccordionSummaryImageDiv>
      {images.slice(0, maxVisible).map((src, index) => (
        <img key={index} src={src}></img>
      ))}

      {images.length > maxVisible && (
        <div className="extra-image">+{images.length - maxVisible}</div>
      )}
    </AccordionSummaryImageDiv>
  );
};

const AccordionSummaryImageDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  position: relative;

  img:first-child {
    width: 70px;
    height: 70px;
  }

  img {
    width: 48px;
    height: 48px;
    position: relative;
  }

  .extra-image {
    width: 48px;
    height: 48px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    display: flex;
    font-size: 16px;
    color: white;
    position: absolute;
    right: 0;
    justify-content: center;
    align-items: center;
  }
`;
