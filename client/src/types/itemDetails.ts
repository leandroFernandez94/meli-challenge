import { FormattedCategory } from "./category";

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
