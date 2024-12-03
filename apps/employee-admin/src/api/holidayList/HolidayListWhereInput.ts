import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HolidayListWhereInput = {
  color?: StringNullableFilter;
  country?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  fromDate?: DateTimeNullableFilter;
  holidayListName?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  subdivision?: StringNullableFilter;
  toDate?: DateTimeNullableFilter;
  totalHolidays?: IntNullableFilter;
  weeklyOff?: StringNullableFilter;
};
