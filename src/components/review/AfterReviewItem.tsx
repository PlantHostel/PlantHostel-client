import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import { InfoText } from "../common/InfoText";
import { StarRate } from "../common/StarRate";
import { AccordionSummaryImage } from "./AccordionSummaryImage";

interface AfterReviewItemProps {
  item: {
    id: number;
    images: string[];
    productNm: string;
    rate: number;
    price: number;
    deliveryDate: string;
    createdAt: string;
    content: string;
  };
  expanded: boolean;
  onClick: () => void;
}

export const AfterReviewItem = ({
  item,
  expanded,
  onClick,
}: AfterReviewItemProps) => {
  return (
    <StyledAccordion>
      <Accordion expanded={expanded} onChange={onClick}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {!expanded ? (
            <InfoWrapper>
              <img className="item-img" src={item.images[0]} />
              <div className="item-info">
                <InfoText
                  label="상품명"
                  value={item.productNm}
                  wordBreak="nowrap"
                />
                <InfoText label="평점" value={<StarRate rate={4} />} />
                <InfoText
                  label="배송일자"
                  value={item.deliveryDate}
                  wordBreak="nowrap"
                />
                <InfoText
                  label="작성일자"
                  value={item.createdAt}
                  wordBreak="nowrap"
                />
              </div>
            </InfoWrapper>
          ) : (
            <>
              <AccordionSummaryImage images={item.images} />
            </>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <InfoWrapper>
            <div className="item-info">
              <InfoText
                label="상품명"
                value={item.productNm}
                wordBreak="nowrap"
              />
              <InfoText label="평점" value={<StarRate rate={4} />} />
              <InfoText
                label="가격"
                value={`${item.price.toLocaleString()}원`}
                wordBreak="nowrap"
              />
              <InfoText
                label="배송일자"
                value={item.deliveryDate}
                wordBreak="nowrap"
              />
              <InfoText
                label="작성일자"
                value={item.createdAt}
                wordBreak="nowrap"
              />
              <InfoText label="리뷰" value={item.content} />
            </div>
          </InfoWrapper>
        </AccordionDetails>
      </Accordion>
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div`
  .MuiPaper-root {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  }

  .MuiButtonBase-root {
    padding: 0;
  }

  .MuiAccordionSummary-content {
    margin: 12px;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin-left: 12px;
  }

  .item-info div:last-child {
    width: 100%;
    white-space: normal;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
  position: relative;

  .item-img {
    width: 70px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .arrow-button {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 12px;
    top: 50%;
  }
`;
