import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ShippingRuleWhereInput = {
  account?: StringNullableFilter;
  calculateBasedOn?: StringNullableFilter;
  company?: StringNullableFilter;
  costCenter?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  disabled?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  label?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  shippingAmount?: FloatNullableFilter;
  shippingRuleType?: StringNullableFilter;
};
