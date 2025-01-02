import { SortOrder } from "../../util/SortOrder";

export type PaymentEntryOrderByInput = {
  amendedFrom?: SortOrder;
  applyTaxWithholdingAmount?: SortOrder;
  autoRepeat?: SortOrder;
  bank?: SortOrder;
  bankAccount?: SortOrder;
  bankAccountNo?: SortOrder;
  baseInWords?: SortOrder;
  basePaidAmount?: SortOrder;
  basePaidAmountAfterTax?: SortOrder;
  baseReceivedAmount?: SortOrder;
  baseReceivedAmountAfterTax?: SortOrder;
  baseTotalAllocatedAmount?: SortOrder;
  baseTotalTaxesAndCharges?: SortOrder;
  bookAdvancePaymentsInSeparatePartyAccount?: SortOrder;
  clearanceDate?: SortOrder;
  company?: SortOrder;
  contactEmail?: SortOrder;
  contactPerson?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customRemarks?: SortOrder;
  differenceAmount?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  inWords?: SortOrder;
  isOpening?: SortOrder;
  letterHead?: SortOrder;
  modeOfPayment?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  namingSeries?: SortOrder;
  owner?: SortOrder;
  paidAmount?: SortOrder;
  paidAmountAfterTax?: SortOrder;
  paidFrom?: SortOrder;
  paidFromAccountBalance?: SortOrder;
  paidFromAccountCurrency?: SortOrder;
  paidFromAccountType?: SortOrder;
  paidTo?: SortOrder;
  paidToAccountBalance?: SortOrder;
  paidToAccountCurrency?: SortOrder;
  paidToAccountType?: SortOrder;
  party?: SortOrder;
  partyBalance?: SortOrder;
  partyBankAccount?: SortOrder;
  partyName?: SortOrder;
  partyType?: SortOrder;
  paymentOrder?: SortOrder;
  paymentOrderStatus?: SortOrder;
  paymentType?: SortOrder;
  postingDate?: SortOrder;
  printHeading?: SortOrder;
  project?: SortOrder;
  purchaseTaxesAndChargesTemplate?: SortOrder;
  receivedAmount?: SortOrder;
  receivedAmountAfterTax?: SortOrder;
  reconcileOnAdvancePaymentDate?: SortOrder;
  referenceDate?: SortOrder;
  referenceNo?: SortOrder;
  remarks?: SortOrder;
  salesTaxesAndChargesTemplate?: SortOrder;
  sourceExchangeRate?: SortOrder;
  status?: SortOrder;
  targetExchangeRate?: SortOrder;
  taxWithholdingCategory?: SortOrder;
  title?: SortOrder;
  totalAllocatedAmount?: SortOrder;
  totalTaxesAndCharges?: SortOrder;
  unallocatedAmount?: SortOrder;
  updatedAt?: SortOrder;
};