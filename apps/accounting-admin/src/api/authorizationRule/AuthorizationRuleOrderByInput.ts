import { SortOrder } from "../../util/SortOrder";

export type AuthorizationRuleOrderByInput = {
  approvingRole?: SortOrder;
  approvingUser?: SortOrder;
  basedOn?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customerOrItem?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  masterName?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  systemRole?: SortOrder;
  systemUser?: SortOrder;
  toDesignation?: SortOrder;
  toEmp?: SortOrder;
  transaction?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
