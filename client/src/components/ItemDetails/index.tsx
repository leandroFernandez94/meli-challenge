import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SignedRequest } from "../../types/FormatterWithAuthor";
import { FormattedSearch } from "../../types/search";
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
  return <span>{item ? JSON.stringify(item, null, "  ") : "Loading"}</span>;
}

export default ItemDetails;
