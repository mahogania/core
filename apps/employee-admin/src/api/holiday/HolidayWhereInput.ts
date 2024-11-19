import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HolidayWhereInput = {
  creation?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  holidayDate?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  weeklyOff?: IntNullableFilter;
};
