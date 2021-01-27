import {
  SearchApiAvailableFilter,
  SearchApiAvailableFilterValue,
  SearchApiFilter,
  SearchApiResponseItem,
} from "@shared-types/Search";

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

function getCategoryWithMostResults(
  availableFilters: SearchApiAvailableFilter[]
) {
  let categoryWithMostResults: SearchApiAvailableFilterValue | null = null;
  const availableCategoryFilters = availableFilters.find(
    (filter) => filter.id === CATEGORY_FILTER_ID
  );
  if (!availableCategoryFilters) return null;

  availableCategoryFilters.values.forEach((category) => {
    if (
      !categoryWithMostResults ||
      category.results > categoryWithMostResults.results
    ) {
      categoryWithMostResults = category;
    }
  });
  return categoryWithMostResults;
}

function getCategoriesPathFromFilters(
  filters: SearchApiFilter[],
  availableFilters: SearchApiAvailableFilter[]
) {
  const categoryFilter = filters.find(
    (filter) => filter.id === CATEGORY_FILTER_ID
  );

  const categoryWithMostResults = getCategoryWithMostResults(availableFilters);
  if (
    !categoryFilter ||
    !categoryFilter.values[0] ||
    !categoryFilter.values[0].path_from_root
  ) {
    return categoryWithMostResults ? [categoryWithMostResults] : [];
  }

  return categoryWithMostResults
    ? [...categoryFilter.values[0].path_from_root, categoryWithMostResults]
    : categoryFilter.values[0].path_from_root;
}

type SearchFormatterArgs = {
  results: SearchApiResponseItem[];
  filters: SearchApiFilter[];
  available_filters: SearchApiAvailableFilter[];
};

function searchFormatter({
  results,
  filters,
  available_filters: availableFilters,
}: SearchFormatterArgs) {
  return {
    categories: getCategoriesPathFromFilters(filters, availableFilters),
    items: results.map(itemFormatter),
  };
}

export default searchFormatter;
