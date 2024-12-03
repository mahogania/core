import { SortOrder } from "../../util/SortOrder";

export type StockReconciliationOrderByInput = {
  amendedFrom?: SortOrder;
  company?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  differenceAmount?: SortOrder;
  docstatus?: SortOrder;
  expenseAccount?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  namingSeries?: SortOrder;
  owner?: SortOrder;
  postingDate?: SortOrder;
  postingTime?: SortOrder;
  purpose?: SortOrder;
  scanBarcode?: SortOrder;
  scanMode?: SortOrder;
  setPostingTime?: SortOrder;
  setWarehouse?: SortOrder;
  updatedAt?: SortOrder;
};
