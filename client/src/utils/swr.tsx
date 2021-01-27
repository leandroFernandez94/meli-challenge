import { ReactElement } from "react";
import useSWR, { SWRConfig } from "swr";
import { SignedRequest } from "@shared-types/FormatterWithAuthor";
import { FormattedItemDetails } from "@shared-types/Item";
import { FormattedSearch } from "@shared-types/Search";

async function fetcher(url: string) {
  const response = await fetch(url);
  return response.json();
}

// this wrapper brings the cache functionality used by useSwr

export function SwrWrapper({ children }: { children: ReactElement }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
}

// every fetch hook has a data return type(G)

type RequestSWRHook<G> = {
  queryResult: G;
  isLoading: boolean;
  error: any;
};

export function useSearch(
  query: string | null
): RequestSWRHook<SignedRequest<FormattedSearch>> {
  const { data, error } = useSWR(query ? `/api/items?q=${query}` : null);

  return {
    queryResult: data,
    isLoading: !error && !data,
    error: error,
  };
}

export function useItemDetails(
  id: string
): RequestSWRHook<SignedRequest<FormattedItemDetails>> {
  const { data, error } = useSWR(`/api/items/${id}`);

  return {
    queryResult: data,
    isLoading: !error && !data,
    error: error,
  };
}
