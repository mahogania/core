import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BankClearanceDetailWhereInput = {
  againstAccount?: StringNullableFilter;
  amount?: StringNullableFilter;
  chequeDate?: DateTimeNullableFilter;
  chequeNumber?: StringNullableFilter;
  clearanceDate?: DateTimeNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  paymentDocument?: StringNullableFilter;
  paymentEntry?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
};
