import { SortOrder } from "../../util/SortOrder";

export type MaintenanceScheduleItemOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  itemCode?: SortOrder;
  itemName?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  noOfVisits?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  periodicity?: SortOrder;
  salesOrder?: SortOrder;
  salesPerson?: SortOrder;
  serialAndBatchBundle?: SortOrder;
  serialNo?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
