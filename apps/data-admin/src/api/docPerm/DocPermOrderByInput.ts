import { SortOrder } from "../../util/SortOrder";

export type DocPermOrderByInput = {
  amend?: SortOrder;
  cancel?: SortOrder;
  create?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  deleteField?: SortOrder;
  docstatus?: SortOrder;
  email?: SortOrder;
  exportField?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  ifOwner?: SortOrder;
  importField?: SortOrder;
  match?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  permlevel?: SortOrder;
  print?: SortOrder;
  read?: SortOrder;
  report?: SortOrder;
  role?: SortOrder;
  select?: SortOrder;
  share?: SortOrder;
  submit?: SortOrder;
  updatedAt?: SortOrder;
  write?: SortOrder;
};
