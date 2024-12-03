import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CalendarViewWhereInput = {
  allDay?: IntNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  endDateField?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  owner?: StringNullableFilter;
  referenceDoctype?: StringNullableFilter;
  startDateField?: StringNullableFilter;
  subjectField?: StringNullableFilter;
};
