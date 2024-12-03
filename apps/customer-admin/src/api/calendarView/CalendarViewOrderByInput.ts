import { SortOrder } from "../../util/SortOrder";

export type CalendarViewOrderByInput = {
  allDay?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  endDateField?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  owner?: SortOrder;
  referenceDoctype?: SortOrder;
  startDateField?: SortOrder;
  subjectField?: SortOrder;
  updatedAt?: SortOrder;
};
