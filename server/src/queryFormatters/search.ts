import { SearchApiFilter, SearchApiResponseItem } from "@shared-types/Search";

const CATEGORY_FILTER_ID = "category";

function itemFormatter(item: SearchApiResponseItem) {
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
    adress: item.address.city_name || item.address.state_name,
  };
}

function getCategoriesPathFromFilters(filters: SearchApiFilter[]) {
  const categoryFilter = filters.find(
    (filter) => filter.id === CATEGORY_FILTER_ID
  );
  if (
    !categoryFilter ||
    !categoryFilter.values[0] ||
    !categoryFilter.values[0].path_from_root
  ) {
    return [];
  }

  return categoryFilter.values[0].path_from_root;
}

type SearchFormatterArgs = {
  results: SearchApiResponseItem[];
  filters: SearchApiFilter[];
};

function searchFormatter({ results, filters }: SearchFormatterArgs) {
  return {
    categories: getCategoriesPathFromFilters(filters),
    items: results.map(itemFormatter),
  };
}

export default searchFormatter;
