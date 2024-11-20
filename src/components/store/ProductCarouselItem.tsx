import styled from "styled-components";

interface ProductItem {
  item: {
    image: string;
    isSale: boolean;
    saleRate: number;
    price: number;
    storeName: string;
    productName: string;
    content: string;
  };
}

export const ProductCarouselItem = ({ item }: ProductItem) => {
  return (
    <ItemDiv>
      <img src={item.image} alt="추천상품 이미지" />
      <div className="price-section">
        {item.isSale && <span className="sale">{item.saleRate}</span>}
        <span className="price">{item.price.toLocaleString()}</span>
      </div>
      <div className="product-info">
        <span className="store-name">{item.storeName}</span>
        <span className="product-name">{item.productName}</span>
      </div>
      <div className="product-detail">{item.content}</div>
      {item.isSale && <span className="sale-product">SALE</span>}
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 101px;
  margin-bottom: 24px;

  img {
    width: 101px;
    height: 101px;
  }

  .price-section {
    display: flex;
    gap: 4px;
    margin-top: 4px;
  }

  .sale {
    color: #b71c1c;
    font-size: 15px;
    line-height: 22px;
  }

  .sale::after {
    content: "%";
    font-size: 10px;
  }

  .price {
    font-size: 15px;
    line-height: 22px;
  }

  .product-info {
    margin: 2px 0px;
    display: flex;
    gap: 4px;
    font-size: 12px;
    line-height: 18px;
  }

  .product-info .store-name {
    color: #117956;
  }

  .product-detail {
    font-size: 12px;
    line-height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #7d8280;
  }

  .sale-product {
    margin-top: 4px;
    border: none;
    padding: 2px 4px;
    background-color: #117956;
    color: white;
    width: fit-content;
    border-radius: 4px;
    font-size: 8px;
  }
`;
