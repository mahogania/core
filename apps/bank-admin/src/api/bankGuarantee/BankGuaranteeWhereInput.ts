import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BankGuaranteeWhereInput = {
  account?: StringNullableFilter;
  amendedFrom?: StringNullableFilter;
  amount?: FloatNullableFilter;
  bank?: StringNullableFilter;
  bankAccount?: StringNullableFilter;
  bankAccountNo?: StringNullableFilter;
  bankGuaranteeNumber?: StringNullableFilter;
  bgType?: StringNullableFilter;
  branchCode?: StringNullableFilter;
  charges?: FloatNullableFilter;
  creation?: DateTimeNullableFilter;
  customer?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  endDate?: DateTimeNullableFilter;
  fixedDepositNumber?: StringNullableFilter;
  iban?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  marginMoney?: FloatNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  moreInformation?: StringNullableFilter;
  name?: StringNullableFilter;
  nameOfBeneficiary?: StringNullableFilter;
  owner?: StringNullableFilter;
  project?: StringNullableFilter;
  referenceDocname?: StringNullableFilter;
  referenceDoctype?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  supplier?: StringNullableFilter;
  swiftNumber?: StringNullableFilter;
  validity?: IntNullableFilter;
};
