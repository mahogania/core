import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SalesInvoicePaymentWhereInput = {
  account?: StringNullableFilter;
  amount?: FloatNullableFilter;
  baseAmount?: FloatNullableFilter;
  clearanceDate?: DateTimeNullableFilter;
  creation?: DateTimeNullableFilter;
  defaultField?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modeOfPayment?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  referenceNo?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
