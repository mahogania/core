import { SortOrder } from "../../util/SortOrder";

export type StockEntryTypeOrderByInput = {
  addToTransit?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isStandard?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  purpose?: SortOrder;
  updatedAt?: SortOrder;
};
