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

export type SearchApiFilterValue = {
  id: string;
  name: string;
  path_from_root: {
    id: string;
    name: string;
  }[];
};

export type SearchApiFilter = {
  id: string;
  values: SearchApiFilterValue[];
};

export type SearchApiResponse = {
  results: SearchApiResponseItem[];
  filters: SearchApiFilter[];
};

export type FormattedSearch = {
  categories: FormattedCategory[];
  items: {
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
  }[];
};
