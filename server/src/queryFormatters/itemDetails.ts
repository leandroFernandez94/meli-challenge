import { ItemApiResponse, ItemWithDescription } from "@shared-types/Item";

function priceFormatter(item: ItemApiResponse) {
  const { currency_id: currency } = item;
  const [amount, decimals] = item.price.toString().split(".");

  return {
    amount: parseInt(amount),
    decimals: parseInt(decimals) || 0,
    currency,
  };
}

//returns the item details formatted for the frontend
function itemDetailsFormatter({
  item,
  description,
  category,
}: ItemWithDescription) {
  return {
    category: category.path_from_root,
    item: {
      id: item.id,
      title: item.title,
      price: priceFormatter(item),
      picture: item.pictures[0].url,
      condition: item.condition,
      free_shipping: item.shipping && item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
    },
  };
}

export default itemDetailsFormatter;
