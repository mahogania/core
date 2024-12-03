import { SortOrder } from "../../util/SortOrder";

export type DeferredAccountingOrderByInput = {
  account?: SortOrder;
  amendedFrom?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  docstatus?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  postingDate?: SortOrder;
  startDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
