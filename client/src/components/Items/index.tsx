import { ReactElement, useMemo } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Breadcrumbs from "../common/Breadcrumbs";
import SearchResult from "./SearchResult";

import SearchLoaderSkeleton from "../Skeletons/search";
import { useSearch } from "../../utils/swr";

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

function Items(): ReactElement {
  const location = useLocation();

  const query = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("search");
  }, [location]);

  const { queryResult, isLoading } = useSearch(query);

  return !isLoading && queryResult ? (
    <div>
      <Breadcrumbs sections={queryResult.categories} />
      <ListsContainer>
        {queryResult.items.map((item) => (
          <SearchResult item={item} />
        ))}
      </ListsContainer>
    </div>
  ) : (
    <SearchLoaderSkeleton resultsLength={4} />
  );
}

export default Items;
