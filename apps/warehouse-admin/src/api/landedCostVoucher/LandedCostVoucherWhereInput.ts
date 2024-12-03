import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type LandedCostVoucherWhereInput = {
  amendedFrom?: StringNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  distributeChargesBasedOn?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  owner?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
  totalTaxesAndCharges?: FloatNullableFilter;
};
