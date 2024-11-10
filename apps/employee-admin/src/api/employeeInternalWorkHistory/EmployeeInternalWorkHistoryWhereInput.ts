import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeInternalWorkHistoryWhereInput = {
  branch?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  department?: StringNullableFilter;
  designation?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  fromDate?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  toDate?: DateTimeNullableFilter;
};
