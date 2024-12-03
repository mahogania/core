import { SortOrder } from "../../util/SortOrder";

export type JobCardScheduledTimeOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  fromTime?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  timeInMins?: SortOrder;
  toTime?: SortOrder;
  updatedAt?: SortOrder;
};
