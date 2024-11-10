import { SortOrder } from "../../util/SortOrder";

export type CurrencyExchangeOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  date?: SortOrder;
  docstatus?: SortOrder;
  exchangeRate?: SortOrder;
  forBuying?: SortOrder;
  forSelling?: SortOrder;
  fromCurrency?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  toCurrency?: SortOrder;
  updatedAt?: SortOrder;
};
