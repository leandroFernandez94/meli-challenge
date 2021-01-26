import { ReactElement, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SignedRequest } from "../../types/FormatterWithAuthor";
import { FormattedItemDetails } from "../../types/itemDetails";
import currencyFormatter from "../../utils/currencyFormatter";
import Breadcrumbs from "../common/Breadcrumbs";
import DetailsHead from "./DetailsHead";
import DetailsBody from "./DetailsBody";
import DetailsLoaderSkeleton from "../Skeletons/details";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: column & > div {
    margin-bottom: 32px;
  }
`;

async function fetchItemDetails(
  id: string
): Promise<SignedRequest<FormattedItemDetails>> {
  const results = await fetch(`/api/items/${id}`);
  return results.json();
}

function ItemDetails(): ReactElement {
  const [details, setDetails] = useState<SignedRequest<FormattedItemDetails>>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(
    function onMount() {
      async function setItemOnMout() {
        const result = await fetchItemDetails(id);
        setDetails(result);
        setLoading(false);
      }

      window.scrollTo(0, 0);
      setLoading(true);
      setItemOnMout();
    },
    [id]
  );

  const headProps = useMemo(() => {
    if (!details) return null;
    return {
      picture: details.item.picture,
      condition: details.item.condition,
      soldQuantity: details.item.sold_quantity,
      title: details.item.title,
      price: currencyFormatter.format(details.item.price.amount),
    };
  }, [details]);

  return (
    <ListsContainer>
      {!loading && details ? (
        <div>
          <Breadcrumbs sections={details.category} />
          {headProps && <DetailsHead {...headProps}></DetailsHead>}
          <DetailsBody description={details.item.description}></DetailsBody>
        </div>
      ) : (
        <DetailsLoaderSkeleton />
      )}
    </ListsContainer>
  );
}

export default ItemDetails;
