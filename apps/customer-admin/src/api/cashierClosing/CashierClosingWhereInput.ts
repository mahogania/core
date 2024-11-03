import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CashierClosingWhereInput = {
  amendedFrom?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  custody?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  expense?: FloatNullableFilter;
  fromTime?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  netAmount?: FloatNullableFilter;
  outstandingAmount?: FloatNullableFilter;
  owner?: StringNullableFilter;
  returns?: FloatNullableFilter;
  time?: DateTimeNullableFilter;
  user?: StringNullableFilter;
};
