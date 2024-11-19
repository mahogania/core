import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PackingSlipWhereInput = {
  amendedFrom?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  deliveryNote?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  fromCaseNo?: IntNullableFilter;
  grossWeightPkg?: FloatNullableFilter;
  grossWeightUom?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  letterHead?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  netWeightPkg?: FloatNullableFilter;
  netWeightUom?: StringNullableFilter;
  owner?: StringNullableFilter;
  toCaseNo?: IntNullableFilter;
};
