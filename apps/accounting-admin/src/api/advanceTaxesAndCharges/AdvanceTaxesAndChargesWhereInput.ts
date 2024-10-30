import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdvanceTaxesAndChargesWhereInput = {
  accountHead?: StringNullableFilter;
  addDeductTax?: StringNullableFilter;
  allocatedAmount?: FloatNullableFilter;
  baseTaxAmount?: FloatNullableFilter;
  baseTotal?: FloatNullableFilter;
  chargeType?: StringNullableFilter;
  costCenter?: StringNullableFilter;
  currency?: StringNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  includedInPaidAmount?: IntNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  rate?: FloatNullableFilter;
  rowId?: StringNullableFilter;
  taxAmount?: FloatNullableFilter;
  total?: FloatNullableFilter;
};
