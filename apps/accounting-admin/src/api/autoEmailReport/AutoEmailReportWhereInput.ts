import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AutoEmailReportWhereInput = {
  creation?: DateTimeNullableFilter;
  dataModifiedTill?: IntNullableFilter;
  dayOfWeek?: StringNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  dynamicDatePeriod?: StringNullableFilter;
  emailTo?: StringNullableFilter;
  enabled?: IntNullableFilter;
  filterMeta?: StringNullableFilter;
  filters?: StringNullableFilter;
  format?: StringNullableFilter;
  frequency?: StringNullableFilter;
  fromDateField?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  noOfRows?: IntNullableFilter;
  owner?: StringNullableFilter;
  referenceReport?: StringNullableFilter;
  report?: StringNullableFilter;
  reportType?: StringNullableFilter;
  sendIfData?: IntNullableFilter;
  sender?: StringNullableFilter;
  toDateField?: StringNullableFilter;
  useFirstDayOfPeriod?: IntNullableFilter;
  user?: StringNullableFilter;
};
