export type ItemApiResponse = {
  id: string;
  title: string;
  currency_id: string;
  price: number;
  pictures: Array<string>;
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
};

export type FormattedItemDetails = {
  // TODO categories
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
