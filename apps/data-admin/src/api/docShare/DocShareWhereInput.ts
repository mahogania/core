import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DocShareWhereInput = {
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  everyone?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  notifyByEmail?: IntNullableFilter;
  owner?: StringNullableFilter;
  read?: IntNullableFilter;
  share?: IntNullableFilter;
  shareDoctype?: StringNullableFilter;
  shareName?: StringNullableFilter;
  submit?: IntNullableFilter;
  user?: StringNullableFilter;
  write?: IntNullableFilter;
};
