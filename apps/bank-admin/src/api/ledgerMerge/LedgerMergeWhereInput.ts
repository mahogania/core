import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LedgerMergeWhereInput = {
  account?: StringNullableFilter;
  accountName?: StringNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isGroup?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  rootType?: StringNullableFilter;
  status?: StringNullableFilter;
};
