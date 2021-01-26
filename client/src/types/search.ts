import { FormattedCategory } from "./category";

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
  adress: string;
};

export type FormattedSearch = {
  categories: Array<FormattedCategory>;
  items: Array<SearchItem>;
};
