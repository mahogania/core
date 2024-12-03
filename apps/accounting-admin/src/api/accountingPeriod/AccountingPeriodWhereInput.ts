import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountingPeriodWhereInput = {
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  periodName?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
