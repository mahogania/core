import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ActivityLogWhereInput = {
  communicationDate?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  ipAddress?: StringNullableFilter;
  linkDoctype?: StringNullableFilter;
  linkName?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  operation?: StringNullableFilter;
  owner?: StringNullableFilter;
  referenceDoctype?: StringNullableFilter;
  referenceName?: StringNullableFilter;
  referenceOwner?: StringNullableFilter;
  status?: StringNullableFilter;
  subject?: StringNullableFilter;
  timelineDoctype?: StringNullableFilter;
  timelineName?: StringNullableFilter;
  user?: StringNullableFilter;
};