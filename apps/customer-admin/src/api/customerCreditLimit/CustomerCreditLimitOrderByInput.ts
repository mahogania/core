import { SortOrder } from "../../util/SortOrder";

export type CustomerCreditLimitOrderByInput = {
  bypassCreditLimitCheck?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  creditLimit?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  updatedAt?: SortOrder;
};
