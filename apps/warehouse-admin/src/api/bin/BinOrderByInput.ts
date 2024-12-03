import { SortOrder } from "../../util/SortOrder";

export type BinOrderByInput = {
  actualQty?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  indentedQty?: SortOrder;
  itemCode?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  orderedQty?: SortOrder;
  owner?: SortOrder;
  plannedQty?: SortOrder;
  projectedQty?: SortOrder;
  reservedQty?: SortOrder;
  reservedQtyForProduction?: SortOrder;
  reservedQtyForProductionPlan?: SortOrder;
  reservedQtyForSubContract?: SortOrder;
  reservedStock?: SortOrder;
  stockUom?: SortOrder;
  stockValue?: SortOrder;
  updatedAt?: SortOrder;
  valuationRate?: SortOrder;
  warehouse?: SortOrder;
};
