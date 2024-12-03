import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PurchaseInvoiceAdvanceWhereInput = {
  advanceAmount?: FloatNullableFilter;
  allocatedAmount?: FloatNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  exchangeGainLoss?: FloatNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  refExchangeRate?: FloatNullableFilter;
  referenceName?: StringNullableFilter;
  referenceRow?: StringNullableFilter;
  referenceType?: StringNullableFilter;
  remarks?: StringNullableFilter;
};
