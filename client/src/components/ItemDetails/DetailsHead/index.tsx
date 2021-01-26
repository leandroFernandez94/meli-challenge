import styled from "styled-components";

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 32px;
`;

const DetailsImg = styled.img`
  width: 680px;
  flex-shrink: 0;
`;

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
`;

const ConditionWrapper = styled.span`
  font-size: 14px;
  margin-top: 32px;
  margin-bottom: 16px;
`;

const TitleWrapper = styled.span`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 32px;
`;

const PriceWrapper = styled.span`
  font-size: 46px;
  margin-bottom: 32px;
`;

const BuyButton = styled.button`
  outline: none;
  margin-right: 32px;
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: #3483fa;
  color: white;
  cursor: pointer;
`;

type Props = {
  picture: string;
  condition: string;
  soldQuantity: number;
  title: string;
  price: string;
};

export default function DetailsHead(props: Props) {
  return (
    <DetailsRow>
      <DetailsImg src={props.picture} alt={props.title}></DetailsImg>
      <DetailsColumn>
        <ConditionWrapper>
          {props.condition} - {props.soldQuantity} vendidos
        </ConditionWrapper>
        <TitleWrapper>{props.title}</TitleWrapper>
        <PriceWrapper>$ {props.price}</PriceWrapper>
        <BuyButton>Comprar</BuyButton>
      </DetailsColumn>
    </DetailsRow>
  );
}
