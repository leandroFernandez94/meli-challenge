import { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import usePrevious from "../../hooks/usePreviousValue";
import { FormattedSearch } from "../../types/search";
import { SignedRequest } from "../../types/FormatterWithAuthor";
import Breadcrumbs from "../common/Breadcrumbs";
import SearchResult from "./SearchResult";

const ListsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 16px;
  margin-top: 16px;
  flex-direction: column;

  & > div {
    margin-bottom: 32px;
  }

  & > div:last-child {
    margin-bottom: 16px;
  }
`;

async function fetchItems(
  query: string
): Promise<SignedRequest<FormattedSearch>> {
  const results = await fetch(`/api/items?q=${query}`);
  return results.json();
}

function Items(): ReactElement {
  const location = useLocation();
  const prevLocation = usePrevious(location);
  const [queryResult, setQueryResult] = useState<
    SignedRequest<FormattedSearch>
  >();

  useEffect(
    function handleLocationChange() {
      async function fetchAndSetItems(query: string) {
        const result = await fetchItems(query);
        setQueryResult(result);
      }

      if (prevLocation?.search === location.search) return;
      const searchParams = new URLSearchParams(location.search);
      const searchValue = searchParams.get("search");
      if (!searchValue) return;
      fetchAndSetItems(searchValue);
    },
    [location, prevLocation?.search]
  );

  return queryResult ? (
    <div>
      <Breadcrumbs sections={queryResult.categories} />
      <ListsContainer>
        {queryResult.items.map((item) => (
          <SearchResult item={item} />
        ))}
      </ListsContainer>
    </div>
  ) : (
    <span>Loading</span>
  );
}

export default Items;
