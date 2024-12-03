import { SortOrder } from "../../util/SortOrder";

export type ClosingStockBalanceOrderByInput = {
  amendedFrom?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  fromDate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  includeUom?: SortOrder;
  itemCode?: SortOrder;
  itemGroup?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  namingSeries?: SortOrder;
  owner?: SortOrder;
  status?: SortOrder;
  toDate?: SortOrder;
  updatedAt?: SortOrder;
  warehouse?: SortOrder;
  warehouseType?: SortOrder;
};
