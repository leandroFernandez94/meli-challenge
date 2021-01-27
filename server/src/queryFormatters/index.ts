import { FormattedItemDetails, ItemWithDescription } from "@shared-types/Item";
import { FormattedSearch, SearchApiResponse } from "@shared-types/Search";
import { FormatterWithAuthor } from "../../../shared/FormatterWithAuthor";

import itemDetails from "./itemDetails";
import search from "./search";

// formatters used by every router need to return the author property

export const searchFormatter = new FormatterWithAuthor<
  SearchApiResponse,
  FormattedSearch
>(search);

export const itemDetailsFormatter = new FormatterWithAuthor<
  ItemWithDescription,
  FormattedItemDetails
>(itemDetails);
