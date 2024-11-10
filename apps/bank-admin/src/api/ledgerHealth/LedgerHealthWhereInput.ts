import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LedgerHealthWhereInput = {
  checkedOn?: DateTimeNullableFilter;
  creation?: DateTimeNullableFilter;
  debitCreditMismatch?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  generalAndPaymentLedgerMismatch?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: IntNullableFilter;
  owner?: StringNullableFilter;
  voucherNo?: StringNullableFilter;
  voucherType?: StringNullableFilter;
};
