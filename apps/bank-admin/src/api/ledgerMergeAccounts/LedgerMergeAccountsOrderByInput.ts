import { SortOrder } from "../../util/SortOrder";

export type LedgerMergeAccountsOrderByInput = {
  account?: SortOrder;
  accountName?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  merged?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  updatedAt?: SortOrder;
};
