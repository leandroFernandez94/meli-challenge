import { FormattedItemDetails, ItemWithDescription } from "../types/api/Item";
import { FormattedSearch, SearchApiResponse } from "../types/api/search";

import FormatterWithAuthor from "./FormatterWithAuthor";
import itemDetails from "./itemDetails";
import search from "./search";

export const searchMapper = new FormatterWithAuthor<
  SearchApiResponse,
  FormattedSearch
>(search);

export const itemDetailsFormatter = new FormatterWithAuthor<
  ItemWithDescription,
  FormattedItemDetails
>(itemDetails);
