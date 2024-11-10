import { SortOrder } from "../../util/SortOrder";

export type AccountingPeriodOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  periodName?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
