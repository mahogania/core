import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ChangelogFeedWhereInput = {
  appName?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  link?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  owner?: StringNullableFilter;
  postingTimestamp?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
