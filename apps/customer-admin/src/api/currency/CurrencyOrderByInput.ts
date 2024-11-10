import { SortOrder } from "../../util/SortOrder";

export type CurrencyOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  currencyName?: SortOrder;
  docstatus?: SortOrder;
  enabled?: SortOrder;
  fraction?: SortOrder;
  fractionUnits?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  numberFormat?: SortOrder;
  owner?: SortOrder;
  smallestCurrencyFractionValue?: SortOrder;
  symbolField?: SortOrder;
  symbolOnRight?: SortOrder;
  updatedAt?: SortOrder;
};
