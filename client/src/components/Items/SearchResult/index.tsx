import styled from "styled-components";
import { SearchItem } from "../../../types/search";
import SearchResultDescription from "./SearchResultDescription";

type Props = {
  item: SearchItem;
};

const RowContainer = styled.div`
  display: flex;

  & > *:last-child {
    margin-left: 16px;
  }
`;

const RowImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 4px;
`;

export default function SearchResult({
  item: { title, price, free_shipping, picture },
}: Props) {
  const descriptionProps = {
    title,
    price,
    free_shipping,
  };

  return (
    <RowContainer>
      <RowImg src={picture} alt={title} />
      <SearchResultDescription {...descriptionProps} />
    </RowContainer>
  );
}
