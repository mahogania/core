import { SortOrder } from "../../util/SortOrder";

export type CurrencyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  precision?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};
