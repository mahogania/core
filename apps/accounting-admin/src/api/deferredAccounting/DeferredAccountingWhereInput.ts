import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeferredAccountingWhereInput = {
  account?: StringNullableFilter;
  amendedFrom?: StringNullableFilter;
  company?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
  startDate?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
};
