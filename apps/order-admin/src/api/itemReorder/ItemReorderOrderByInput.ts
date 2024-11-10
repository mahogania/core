import { SortOrder } from "../../util/SortOrder";

export type ItemReorderOrderByInput = {
  createdAt?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  materialRequestType?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  updatedAt?: SortOrder;
  warehouse?: SortOrder;
  warehouseGroup?: SortOrder;
  warehouseReorderLevel?: SortOrder;
  warehouseReorderQty?: SortOrder;
};
