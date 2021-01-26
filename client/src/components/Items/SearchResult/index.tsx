import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SearchItem } from "../../../types/search";
import SearchResultDescription from "./SearchResultDescription";

type Props = {
  item: SearchItem;
};

const RowContainer = styled.div`
  display: flex;
  cursor: pointer;

  & > *:last-child {
    margin-left: 16px;
    padding-right: 16px;
  }
`;

const RowImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 4px;
  object-fit: contain;
`;

export default function SearchResult({
  item: { id, title, price, free_shipping, picture, adress },
}: Props) {
  const history = useHistory();

  const descriptionProps = {
    title,
    price,
    free_shipping,
    adress,
  };

  function viewProduct() {
    history.push(`/items/${id}`);
  }

  return (
    <RowContainer onClick={viewProduct}>
      <RowImg src={picture} alt={title} />
      <SearchResultDescription {...descriptionProps} />
    </RowContainer>
  );
}
