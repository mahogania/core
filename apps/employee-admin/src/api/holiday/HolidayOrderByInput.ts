import { SortOrder } from "../../util/SortOrder";

export type HolidayOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  holidayDate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentField?: SortOrder;
  parentType?: SortOrder;
  updatedAt?: SortOrder;
  weeklyOff?: SortOrder;
};
