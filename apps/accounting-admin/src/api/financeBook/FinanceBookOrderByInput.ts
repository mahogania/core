import { SortOrder } from "../../util/SortOrder";

export type FinanceBookOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  docStatus?: SortOrder;
  financeBookName?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
};
