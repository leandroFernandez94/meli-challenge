import { FormattedItemDetails, ItemWithDescription } from "../types/api/Item";
import { FormattedSearch, SearchApiResponseResults } from "../types/api/search";

import FormatterWithAuthor from "./FormatterWithAuthor";
import itemDetails from "./itemDetails";
import search from "./search";

export const searchMapper = new FormatterWithAuthor<
  SearchApiResponseResults,
  FormattedSearch
>(search);

export const itemDetailsFormatter = new FormatterWithAuthor<
  ItemWithDescription,
  FormattedItemDetails
>(itemDetails);
