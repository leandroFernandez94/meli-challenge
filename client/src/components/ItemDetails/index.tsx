import { ReactElement, useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import currencyFormatter from "../../utils/currencyFormatter";
import Breadcrumbs from "../common/Breadcrumbs";
import DetailsHead from "./DetailsHead";
import DetailsBody from "./DetailsBody";
import DetailsLoaderSkeleton from "../Skeletons/details";
import { useItemDetails } from "../../utils/swr";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: column & > div {
    margin-bottom: 32px;
  }
`;

function ItemDetails(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const { queryResult: details, isLoading } = useItemDetails(id);

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
      {!isLoading && details ? (
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
