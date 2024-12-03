import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentReconciliationWhereInput = {
  amendedFrom?: StringNullableFilter;
  bankCashAccount?: StringNullableFilter;
  company?: StringNullableFilter;
  costCenter?: StringNullableFilter;
  defaultAdvanceAccount?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  errorLog?: StringNullableFilter;
  fromInvoiceDate?: DateTimeNullableFilter;
  fromPaymentDate?: DateTimeNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  party?: StringNullableFilter;
  partyType?: StringNullableFilter;
  receivablePayableAccount?: StringNullableFilter;
  status?: StringNullableFilter;
  toInvoiceDate?: DateTimeNullableFilter;
  toPaymentDate?: DateTimeNullableFilter;
};
