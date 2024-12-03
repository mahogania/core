import { SortOrder } from "../../util/SortOrder";

export type AssetMaintenanceTaskOrderByInput = {
  assignTo?: SortOrder;
  assignToName?: SortOrder;
  certificateRequired?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  lastCompletionDate?: SortOrder;
  maintenanceStatus?: SortOrder;
  maintenanceTask?: SortOrder;
  maintenanceType?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  nextDueDate?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentField?: SortOrder;
  parentType?: SortOrder;
  periodicity?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
