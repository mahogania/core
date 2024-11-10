import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FiscalYearWhereInput = {
  autoCreated?: IntNullableFilter;
  creation?: DateTimeNullableFilter;
  disabled?: IntNullableFilter;
  docStatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isShortYear?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  year?: StringNullableFilter;
  yearEndDate?: DateTimeNullableFilter;
  yearStartDate?: DateTimeNullableFilter;
};
