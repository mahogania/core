import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SalesInvoiceTimesheetWhereInput = {
  activityType?: StringNullableFilter;
  billingAmount?: FloatNullableFilter;
  billingHours?: FloatNullableFilter;
  creation?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  fromTime?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  projectName?: StringNullableFilter;
  timeSheet?: StringNullableFilter;
  timesheetDetail?: StringNullableFilter;
  toTime?: DateTimeNullableFilter;
};
