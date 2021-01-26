import { CategoryApiResponse, FormattedCategory } from "./category";

export type ItemApiResponse = {
  id: string;
  title: string;
  category_id: string;
  currency_id: string;
  price: number;
  pictures: Array<{ url: string }>;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  sold_quantity: number;
};

export type DescriptionApiResponse = {
  plain_text: string;
};

export type ItemWithDescription = {
  item: ItemApiResponse;
  description: DescriptionApiResponse;
  category: CategoryApiResponse;
};

export type FormattedItemDetails = {
  category: FormattedCategory[];
  item: {
    id: string;
    title: string;
    price: {
      amount: number;
      decimals: number;
      currency: string;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
  };
};
