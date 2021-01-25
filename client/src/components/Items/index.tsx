import { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import usePrevious from "../../hooks/usePreviousValue";

import { FormattedSearch } from "../../types/search";
import { SignedRequest } from "../../types/FormatterWithAuthor";
import Breadcrumbs from "../common/Breadcrumbs";

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
      <span>items: {JSON.stringify(queryResult, null, "  ")}</span>
    </div>
  ) : (
    <span>Loading</span>
  );
}

export default Items;
