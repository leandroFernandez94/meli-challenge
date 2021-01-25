import { FormattedCategory } from "./category";

export type SearchApiResponseItem = {
  id: string;
  title: string;
  price: Number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  sold_quantity: number;
};

export type SearchApiResponseResults = Array<SearchApiResponseItem>;

export type SearchApiResponse = {
  results: SearchApiResponseResults;
};

export type SearchItem = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type FormattedSearch = {
  categories: Array<FormattedCategory>;
  items: Array<SearchItem>;
};
