import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PosOpeningEntryWhereInput = {
  amendedFrom?: StringNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docStatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  periodEndDate?: DateTimeNullableFilter;
  periodStartDate?: DateTimeNullableFilter;
  posClosingEntry?: StringNullableFilter;
  posProfile?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
  setPostingDate?: IntNullableFilter;
  status?: StringNullableFilter;
  user?: StringNullableFilter;
};
