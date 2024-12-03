import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentEntryWhereInput = {
  amendedFrom?: StringNullableFilter;
  applyTaxWithholdingAmount?: IntNullableFilter;
  autoRepeat?: StringNullableFilter;
  bank?: StringNullableFilter;
  bankAccount?: StringNullableFilter;
  bankAccountNo?: StringNullableFilter;
  baseInWords?: StringNullableFilter;
  basePaidAmount?: FloatNullableFilter;
  basePaidAmountAfterTax?: FloatNullableFilter;
  baseReceivedAmount?: FloatNullableFilter;
  baseReceivedAmountAfterTax?: FloatNullableFilter;
  baseTotalAllocatedAmount?: FloatNullableFilter;
  baseTotalTaxesAndCharges?: FloatNullableFilter;
  bookAdvancePaymentsInSeparatePartyAccount?: IntNullableFilter;
  clearanceDate?: DateTimeNullableFilter;
  company?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  contactPerson?: StringNullableFilter;
  costCenter?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  customRemarks?: IntNullableFilter;
  differenceAmount?: FloatNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  inWords?: StringNullableFilter;
  isOpening?: StringNullableFilter;
  letterHead?: StringNullableFilter;
  modeOfPayment?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  owner?: StringNullableFilter;
  paidAmount?: FloatNullableFilter;
  paidAmountAfterTax?: FloatNullableFilter;
  paidFrom?: StringNullableFilter;
  paidFromAccountBalance?: FloatNullableFilter;
  paidFromAccountCurrency?: StringNullableFilter;
  paidFromAccountType?: StringNullableFilter;
  paidTo?: StringNullableFilter;
  paidToAccountBalance?: FloatNullableFilter;
  paidToAccountCurrency?: StringNullableFilter;
  paidToAccountType?: StringNullableFilter;
  party?: StringNullableFilter;
  partyBalance?: FloatNullableFilter;
  partyBankAccount?: StringNullableFilter;
  partyName?: StringNullableFilter;
  partyType?: StringNullableFilter;
  paymentOrder?: StringNullableFilter;
  paymentOrderStatus?: StringNullableFilter;
  paymentType?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
  printHeading?: StringNullableFilter;
  project?: StringNullableFilter;
  purchaseTaxesAndChargesTemplate?: StringNullableFilter;
  receivedAmount?: FloatNullableFilter;
  receivedAmountAfterTax?: FloatNullableFilter;
  reconcileOnAdvancePaymentDate?: IntNullableFilter;
  referenceDate?: DateTimeNullableFilter;
  referenceNo?: StringNullableFilter;
  remarks?: StringNullableFilter;
  salesTaxesAndChargesTemplate?: StringNullableFilter;
  sourceExchangeRate?: FloatNullableFilter;
  status?: StringNullableFilter;
  targetExchangeRate?: FloatNullableFilter;
  taxWithholdingCategory?: StringNullableFilter;
  title?: StringNullableFilter;
  totalAllocatedAmount?: FloatNullableFilter;
  totalTaxesAndCharges?: FloatNullableFilter;
  unallocatedAmount?: FloatNullableFilter;
};
