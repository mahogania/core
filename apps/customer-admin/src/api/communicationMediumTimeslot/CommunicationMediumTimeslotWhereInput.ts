import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommunicationMediumTimeslotWhereInput = {
  creation?: DateTimeNullableFilter;
  dayOfWeek?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  employeeGroup?: StringNullableFilter;
  fromTime?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  toTime?: DateTimeNullableFilter;
};
