import styled from "styled-components";
import { HeaderLR } from "../../components/common/HeaderLR";
import CartImage from "../../assets/cart.png";
import { ImageCarousel } from "../../components/common/ImageCarousel";
import PlantImage from "../../assets/store-plant-image.png";
import { StarRate } from "../../components/common/StarRate";
import Title from "../../components/common/Title";
import { ProductCarousel } from "../../components/store/ProductCarousel";
import { InfoText } from "../../components/common/InfoText";
import ProductDetailImage from "../../assets/product-detail-image1.png";
import ProductDetailImage2 from "../../assets/product-detail-image2.png";
import ProductDetailImage3 from "../../assets/product-detail-image3.png";
import moment from "moment";
import { SimpleReviewItem } from "../../components/store/SimpleReviewItem";
import { Support } from "../../components/mypage/Support";
import { CommonButton } from "../../components/common/CommonButton";

export const ProductDetail = () => {
  const icons = [
    {
      image: CartImage,
    },
  ];

  const item = {
    storeName: "그린조아",
    rate: 4,
    title: "생화 / 공기정화 식물 중형 1종, 화분 3종 택 1",
    reviewCount: 112,
    price: 16000,
    deliveryPrice: 0,
    createdDate: new Date(2024, 7, 10),
    type: "생화",
    modelName: "여인초",
    withPot: true,
    composition: "식물 1종 + 화분 3종 택 1",
    avgRate: 4.0,
  };

  const reviews = [
    {
      writer: "행복***89",
      rate: 4,
      content:
        "최근에 인테리어를 변경하면서 너무 과하지 않게 적당히 화사한 플랜테리어 장식을 하고 싶어서 찾아보다가 구매하게 되었습니다. 가격 대비 너무 좋아요",
      createdAt: new Date(2024, 7, 29),
    },
    {
      writer: "행복***89",
      rate: 4,
      content:
        "최근에 인테리어를 변경하면서 너무 과하지 않게 적당히 화사한 플랜테리어 장식을 하고 싶어서 찾아보다가 구매하게 되었습니다. 가격 대비 너무 좋아요",
      createdAt: new Date(2024, 7, 29),
    },
    {
      writer: "행복***89",
      rate: 4,
      content:
        "최근에 인테리어를 변경하면서 너무 과하지 않게 적당히 화사한 플랜테리어 장식을 하고 싶어서 찾아보다가 구매하게 되었습니다. 가격 대비 너무 좋아요",
      createdAt: new Date(2024, 7, 29),
    },
  ];

  return (
    <ProductDetailDiv>
      <HeaderLR title="STORE" icons={icons} />
      <ImageCarousel
        images={[
          PlantImage,
          PlantImage,
          PlantImage,
          PlantImage,
          PlantImage,
          PlantImage,
        ]}
      />
      <FlexDiv>
        <span className="store-name">{item.storeName}</span>
        <div className="star-rate">
          <StarRate rate={item.rate} />
          <span className="review-count">({item.reviewCount})</span>
        </div>
      </FlexDiv>
      <ProductTitle>
        <div className="title">{item.title}</div>
        <span>원산지 : 상품 상세설명 참조</span>
      </ProductTitle>
      <Price>
        <span className="price">{item.price.toLocaleString()}</span>
        {item.deliveryPrice === 0 ? (
          <span className="free-delivery">무료배송</span>
        ) : (
          ""
        )}
      </Price>
      <SimilarProduct>
        <Title title="비슷한 상품" />
        <ProductCarousel />
      </SimilarProduct>
      <ProductInfo>
        <Title title="상품정보 모아보기" />
        <InfoText
          label="제조년월"
          value={moment(item.createdDate).format("YYYY . MM . DD")}
        />
        <InfoText label="타입" value={item.type} />
        <InfoText label="모델명" value={item.modelName} />
        <InfoText
          label="화분 포함여부"
          value={item.withPot ? "화분 포함" : "화분 미포함"}
        />
        <InfoText label="구성" value={item.composition} />
      </ProductInfo>
      <ProductDetailInfo>
        <Title title="상품 상세 정보" />
        <img src={ProductDetailImage} alt="" />
        <div className="detail">초보 집사가 키우기 쉬운 대표 식물, 여인초</div>
        <div className="detail">식물을 키워보는게 처음이신가요?</div>
        <div className="detail">하나하나 차근차근 배워가는 집사의 길,</div>
        <div className="detail">
          인테리어로도 적합한 여인초를 관리 해보세요!
        </div>
        <div className="images">
          <img src={ProductDetailImage2} />
          <img src={ProductDetailImage3} />
        </div>
      </ProductDetailInfo>
      <Reviews>
        <div className="review-section">
          <div className="review">
            상품 리뷰
            <span className="avg-rate">({item.avgRate.toFixed(1)})</span>
          </div>
          <div className="see-all">전체보기</div>
        </div>
        <SimpleReviewItems>
          {reviews.map((review, index) => (
            <SimpleReviewItem key={index} review={review} />
          ))}
        </SimpleReviewItems>
      </Reviews>
      <SupportSection>
        <Support label="상품 문의" className="button" href="자세히 보기" />
      </SupportSection>
      <SupportSection>
        <Support label="판매자 정보" className="button" href="더보기" />
      </SupportSection>
      <ButtonSection>
        <CommonButton bgColor="white" txtColor="#767676" text="장바구니 담기" />
        <CommonButton text="구매하기" />
      </ButtonSection>
    </ProductDetailDiv>
  );
};

const ProductDetailDiv = styled.div`
  .swiper {
    margin-top: 10px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  .store-name {
    display: flex;
    align-items: center;
    color: #117956;
    font-size: 13px;
    line-height: 18px;
  }

  .store-name::after {
    content: ">";
    margin-left: 4px;
    line-height: 18px;
  }

  .star-rate {
    display: flex;
    gap: 3px;
    align-items: center;
  }

  .star-rate .review-count {
    font-size: 12px;
    line-height: 18px;
    font-family: "Pretendard-Regular";
  }
`;

const ProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0px;

  span {
    margin-top: 2px;
    font-family: "Pretendard-Regular";
    font-size: 12px;
    line-height: 18px;
    color: #9ca3a0;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #e8e8e8;

  .price {
    color: #25322b;
    font-size: 20px;
    line-height: 28px;
  }

  .price::after {
    content: "원";
    font-size: 16px;
    margin-left: 2px;
  }

  .free-delivery {
    color: #117956;
    font-size: 12px;
    line-height: 18px;
    margin-left: 4px;
  }
`;

const SimilarProduct = styled.div`
  padding-top: 24px;
  border-bottom: 1px solid #e8e8e8;

  .title {
    margin-top: 0;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  padding: 24px 0px;
  flex-direction: column;
  border-bottom: 1px solid #e8e8e8;

  .title {
    margin-top: 0;
  }

  .label {
    width: 130px;
    color: #9ca3a0;
  }

  .value {
    color: #25322b;
  }
`;

const ProductDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  border-bottom: 1px solid #e8e8e8;

  .title {
    margin-top: 0;
  }

  img {
    margin-bottom: 24px;
  }

  .detail {
    color: #505552;
    font-size: 14px;
    line-height: 20px;
  }

  .images {
    display: flex;
    gap: 8px;
    margin-top: 24px;
  }
`;

const Reviews = styled.div`
  display: flex;
  flex-direction: column;

  .review-section {
    margin-top: 24px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .avg-rate {
    font-size: 16px;
    font-family: "Pretendard-Regular";
  }

  .see-all {
    font-size: 13px;
    cursor: pointer;
    color: #767676;
    font-family: "Pretendard-Regular";
  }
`;

const SimpleReviewItems = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #e8e8e8;
`;

const SupportSection = styled.div`
  display: flex;
  align-items: center;

  .support-div {
    width: 100%;
    padding: 24px 0px;
  }

  .label {
    font-size: 20px;
    line-height: 28px;
  }

  .button {
    color: #073a29;
    display: flex;
    justify-content: flex-end;
  }
`;

const ButtonSection = styled.div`
  border-top: 1px solid #e8e8e8;
  display: flex;
  padding-top: 48px;
  padding-bottom: 24px;
  gap: 12px;

  button {
    flex: 1;
  }
`;
