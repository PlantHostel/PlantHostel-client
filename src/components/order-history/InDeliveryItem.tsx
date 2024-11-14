import styled from "styled-components";
import PlantImage from "../../assets/Rectangle 178.png";
type DeliveryProps = {
  item: {
    id: string;
    name: string;
    price: string;
    day: string;
    delivery: string;
  };
};

export default function InDeliveryItem({ item }: DeliveryProps) {
  return (
    <ItemWrapper>
      <InfoWrapper>
        <img className="item-img" src={PlantImage} />
        <div className="item-info">
          <span className="item-name">{item.name}</span>
          <span className="item-price">{item.price}</span>
          <br />
          <div className="item-delivery-day">
            <span className="item-day">{item.day}</span>
            <span className="item-delivery">{item.delivery}</span>
          </div>
        </div>
      </InfoWrapper>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div``;
const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 12px;
  .item-img {
    width: 70px;
  }
  .item-info {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .item-name {
    color: #767676;
  }
  .item-price {
    font-family: "Pretendard-SemiBold";
  }
  .item-delivery-day {
    display: flex;
    gap: 8px;
  }
  .item-delivery {
    color: #767676;
  }
`;
