import { SortOrder } from "../../util/SortOrder";

export type CostCenterOrderByInput = {
  company?: SortOrder;
  costCenterName?: SortOrder;
  costCenterNumber?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  disabled?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isGroup?: SortOrder;
  lft?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  oldParent?: SortOrder;
  owner?: SortOrder;
  parentCostCenter?: SortOrder;
  rgt?: SortOrder;
  updatedAt?: SortOrder;
};
