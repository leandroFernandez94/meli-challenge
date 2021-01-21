import {
  DescriptionApiResponse,
  ItemApiResponse,
  ItemWithDescription,
} from "../types/api/Item";

function priceFormatter(item: ItemApiResponse) {
  const { currency_id: currency } = item;
  const [amount, decimals] = item.price.toString().split(".");

  return {
    amount: parseInt(amount),
    decimals: parseInt(decimals) || 0,
    currency,
  };
}

function itemDetailsFormatter({ item, description }: ItemWithDescription) {
  return {
    // TODO categories
    item: {
      id: item.id,
      title: item.title,
      price: priceFormatter(item),
      picture: item.pictures[0],
      condition: item.condition,
      free_shipping: item.shipping && item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
    },
  };
}

export default itemDetailsFormatter;
