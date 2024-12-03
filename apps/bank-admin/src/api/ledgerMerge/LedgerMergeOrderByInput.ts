import { SortOrder } from "../../util/SortOrder";

export type LedgerMergeOrderByInput = {
  account?: SortOrder;
  accountName?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isGroup?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  rootType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
