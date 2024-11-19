import { SortOrder } from "../../util/SortOrder";

export type SalesInvoiceTimesheetOrderByInput = {
  activityType?: SortOrder;
  billingAmount?: SortOrder;
  billingHours?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  fromTime?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentField?: SortOrder;
  parentType?: SortOrder;
  projectName?: SortOrder;
  timeSheet?: SortOrder;
  timesheetDetail?: SortOrder;
  toTime?: SortOrder;
  updatedAt?: SortOrder;
};
