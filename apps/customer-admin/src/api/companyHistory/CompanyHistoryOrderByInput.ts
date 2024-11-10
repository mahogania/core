import { SortOrder } from "../../util/SortOrder";

export type CompanyHistoryOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  highlight?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
