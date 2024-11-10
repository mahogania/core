import { SortOrder } from "../../util/SortOrder";

export type BomScrapItemOrderByInput = {
  amount?: SortOrder;
  baseAmount?: SortOrder;
  baseRate?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  itemCode?: SortOrder;
  itemName?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  rate?: SortOrder;
  stockQty?: SortOrder;
  stockUom?: SortOrder;
  updatedAt?: SortOrder;
};
