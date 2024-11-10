import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PosClosingEntryWhereInput = {
  amendedFrom?: StringNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docStatus?: IntNullableFilter;
  errorMessage?: StringNullableFilter;
  grandTotal?: FloatNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  netTotal?: FloatNullableFilter;
  owner?: StringNullableFilter;
  periodEndDate?: DateTimeNullableFilter;
  periodStartDate?: DateTimeNullableFilter;
  posOpeningEntry?: StringNullableFilter;
  posProfile?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
  postingTime?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  totalQuantity?: FloatNullableFilter;
  user?: StringNullableFilter;
};
