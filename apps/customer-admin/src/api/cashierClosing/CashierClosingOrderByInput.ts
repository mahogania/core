import { SortOrder } from "../../util/SortOrder";

export type CashierClosingOrderByInput = {
  amendedFrom?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  custody?: SortOrder;
  date?: SortOrder;
  docstatus?: SortOrder;
  expense?: SortOrder;
  fromTime?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  namingSeries?: SortOrder;
  netAmount?: SortOrder;
  outstandingAmount?: SortOrder;
  owner?: SortOrder;
  returns?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
