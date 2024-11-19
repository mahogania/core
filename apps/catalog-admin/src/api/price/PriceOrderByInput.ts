import { SortOrder } from "../../util/SortOrder";

export type PriceOrderByInput = {
  createdAt?: SortOrder;
  currencyId?: SortOrder;
  id?: SortOrder;
  optionsId?: SortOrder;
  priceRuleUrl?: SortOrder;
  updatedAt?: SortOrder;
};
