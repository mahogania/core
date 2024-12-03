import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JournalEntryTemplateWhereInput = {
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isOpening?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  multiCurrency?: IntNullableFilter;
  namingSeries?: StringNullableFilter;
  owner?: StringNullableFilter;
  templateTitle?: StringNullableFilter;
  voucherType?: StringNullableFilter;
};
