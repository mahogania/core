import { SortOrder } from "../../util/SortOrder";

export type DepreciationScheduleOrderByInput = {
  accumulatedDepreciationAmount?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  depreciationAmount?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  journalEntry?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  scheduleDate?: SortOrder;
  shift?: SortOrder;
  updatedAt?: SortOrder;
};
