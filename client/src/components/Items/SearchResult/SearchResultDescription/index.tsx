import { useMemo } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  free_shipping: boolean;
};

const ItemColumn = styled.div`
  display: flex;
  flex-direction: column;

  & > *:last-child {
    margin-top: 32px;
  }
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

const Price = styled.div`
  font-size: 24px;
`;

const FreeShippingImg = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

const Title = styled.div`
  font-size: 18px;
`;

const FreeShippingIcon = () => (
  <FreeShippingImg src="/ic_shipping@2x.png" alt="has free shipping" />
);

export default function SearchResultDescription(props: Props) {
  const currencyFormatter = useMemo(() => new Intl.NumberFormat(), []);

  return (
    <ItemColumn>
      <ItemRow>
        <Price>$ {currencyFormatter.format(props.price.amount)}</Price>
        {props.free_shipping && <FreeShippingIcon />}
      </ItemRow>
      <Title>{props.title}</Title>
    </ItemColumn>
  );
}
