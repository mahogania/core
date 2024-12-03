import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentOrderReferenceWhereInput = {
  account?: StringNullableFilter;
  amount?: FloatNullableFilter;
  bankAccount?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modeOfPayment?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  paymentReference?: StringNullableFilter;
  paymentRequest?: StringNullableFilter;
  referenceDoctype?: StringNullableFilter;
  referenceName?: StringNullableFilter;
  supplier?: StringNullableFilter;
};
