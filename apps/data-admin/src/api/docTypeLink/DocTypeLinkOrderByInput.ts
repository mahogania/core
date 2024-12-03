import { SortOrder } from "../../util/SortOrder";

export type DocTypeLinkOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  custom?: SortOrder;
  docstatus?: SortOrder;
  group?: SortOrder;
  hidden?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isChildTable?: SortOrder;
  linkDoctype?: SortOrder;
  linkFieldname?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentDoctype?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  tableFieldname?: SortOrder;
  updatedAt?: SortOrder;
};
