function itemFormatter(item) {
  const [amount, decimals] = item.price.toString().split(".");

  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: parseInt(amount),
      decimals: parseInt(decimals) || 0,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping && item.shipping.free_shipping,
  };
}

function searchFormatter(apiResults) {
  return {
    // TODO categories
    items: apiResults.map(itemFormatter),
  };
}

module.exports = searchFormatter;
