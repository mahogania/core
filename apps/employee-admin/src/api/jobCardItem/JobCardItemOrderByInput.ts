import { SortOrder } from "../../util/SortOrder";

export type JobCardItemOrderByInput = {
  allowAlternativeItem?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  itemCode?: SortOrder;
  itemGroup?: SortOrder;
  itemName?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  requiredQty?: SortOrder;
  sourceWarehouse?: SortOrder;
  stockUom?: SortOrder;
  transferredQty?: SortOrder;
  uom?: SortOrder;
  updatedAt?: SortOrder;
};
