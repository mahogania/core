import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PosInvoiceMergeLogWhereInput = {
  amendedFrom?: StringNullableFilter;
  consolidatedCreditNote?: StringNullableFilter;
  consolidatedInvoice?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  customer?: StringNullableFilter;
  customerGroup?: StringNullableFilter;
  docStatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  mergeInvoicesBasedOn?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  posClosingEntry?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
  postingTime?: DateTimeNullableFilter;
};
