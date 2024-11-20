import styled from "styled-components";
interface StoreGridItemProps {
  item: {
    image: string;
    isSale: boolean;
    saleRate: number;
    price: number;
    storeName: string;
    productName: string;
    content: string;
    soldCount: number;
  };
}
export const StoreGridItem = ({ item }: StoreGridItemProps) => {
  return (
    <StoreGridItemDiv>
      <img src={item.image} />
      <div className="price-section">
        {item.isSale && <span className="sale">{item.saleRate}</span>}
        <span className="price">{item.price.toLocaleString()}</span>
      </div>
      <div className="product-info">
        <span className="store-name">{item.storeName}</span>
        <span className="product-name">{item.productName}</span>
      </div>
      <div className="product-detail">{item.content}</div>
      <span className="sold-count">{item.soldCount}개 구매</span>
    </StoreGridItemDiv>
  );
};

const StoreGridItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;

  img {
    width: 170px;
    height: 170px;
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

  .sold-count {
    margin-top: 2px;
    border: none;
    color: #7d8280;
    width: fit-content;
    border-radius: 4px;
    font-size: 10px;
  }
`;
