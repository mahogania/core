import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MaintenanceScheduleItemWhereInput = {
  creation?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  itemCode?: StringNullableFilter;
  itemName?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  noOfVisits?: IntNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  periodicity?: StringNullableFilter;
  salesOrder?: StringNullableFilter;
  salesPerson?: StringNullableFilter;
  serialAndBatchBundle?: StringNullableFilter;
  serialNo?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
