import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SignedRequest } from "../../types/FormatterWithAuthor";
import { FormattedSearch } from "../../types/search";

const ListsContainer = styled.div`
  display: flex;
  margin-left: 16px;
  flex-direction: column & > div {
    margin-bottom: 32px;
  }
`;

async function fetchItemDetails(
  id: string
): Promise<SignedRequest<FormattedSearch>> {
  const results = await fetch(`/api/items/${id}`);
  return results.json();
}

function ItemDetails(): ReactElement {
  const [item, setItem] = useState<SignedRequest<FormattedSearch>>();
  const { id } = useParams<{ id: string }>();

  useEffect(
    function onMount() {
      async function setItemOnMout() {
        const result = await fetchItemDetails(id);
        setItem(result);
      }

      setItemOnMout();
    },
    [id]
  );

  console.log(id);
  return (
    <ListsContainer>
      {item ? JSON.stringify(item, null, "  ") : "Loading"}
    </ListsContainer>
  );
}

export default ItemDetails;
