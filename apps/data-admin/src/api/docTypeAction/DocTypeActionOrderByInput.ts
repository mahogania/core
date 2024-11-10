import { SortOrder } from "../../util/SortOrder";

export type DocTypeActionOrderByInput = {
  action?: SortOrder;
  actionType?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  custom?: SortOrder;
  docstatus?: SortOrder;
  group?: SortOrder;
  hidden?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  label?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  updatedAt?: SortOrder;
};
