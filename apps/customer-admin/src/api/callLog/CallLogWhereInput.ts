import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CallLogWhereInput = {
  callReceivedBy?: StringNullableFilter;
  callType?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  customer?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  duration?: FloatNullableFilter;
  employeeUserId?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  fromField?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  medium?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  originalId?: StringNullableFilter;
  owner?: StringNullableFilter;
  recordingUrl?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  summary?: StringNullableFilter;
  to?: StringNullableFilter;
  typeOfCall?: StringNullableFilter;
};
