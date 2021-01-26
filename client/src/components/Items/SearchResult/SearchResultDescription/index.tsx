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
  adress: string;
};

const ItemColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > *:last-child {
    margin-top: 32px;
  }
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: ${(props: { align?: string }) => props.align || "center"};
  justify-content: space-between;
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

const Adress = styled.div`
  margin-right: 64px;
  font-size: 12px;
  color: #999999;
`;

const FreeShippingIcon = () => (
  <FreeShippingImg src="/ic_shipping@2x.png" alt="has free shipping" />
);

export default function SearchResultDescription(props: Props) {
  const currencyFormatter = useMemo(() => new Intl.NumberFormat(), []);

  return (
    <ItemColumn>
      <ItemRow align="baseline">
        <ItemRow>
          <Price>$ {currencyFormatter.format(props.price.amount)}</Price>
          {props.free_shipping && <FreeShippingIcon />}
        </ItemRow>
        <Adress>{props.adress}</Adress>
      </ItemRow>
      <Title>{props.title}</Title>
    </ItemColumn>
  );
}
