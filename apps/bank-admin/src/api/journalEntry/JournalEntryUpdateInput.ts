export type JournalEntryUpdateInput = {
  amendedFrom?: string | null;
  applyTds?: number | null;
  autoRepeat?: string | null;
  billDate?: Date | null;
  billNo?: string | null;
  chequeDate?: Date | null;
  chequeNo?: string | null;
  clearanceDate?: Date | null;
  company?: string | null;
  creation?: Date | null;
  difference?: number | null;
  docstatus?: number | null;
  dueDate?: Date | null;
  financeBook?: string | null;
  fromTemplate?: string | null;
  idx?: number | null;
  interCompanyJournalEntryReference?: string | null;
  isOpening?: string | null;
  isSystemGenerated?: number | null;
  letterHead?: string | null;
  modeOfPayment?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  multiCurrency?: number | null;
  namingSeries?: string | null;
  owner?: string | null;
  paidLoan?: string | null;
  payToRecdFrom?: string | null;
  paymentOrder?: string | null;
  postingDate?: Date | null;
  processDeferredAccounting?: string | null;
  remark?: string | null;
  reversalOf?: string | null;
  selectPrintHeading?: string | null;
  stockEntry?: string | null;
  taxWithholdingCategory?: string | null;
  title?: string | null;
  totalAmount?: number | null;
  totalAmountCurrency?: string | null;
  totalAmountInWords?: string | null;
  totalCredit?: number | null;
  totalDebit?: number | null;
  userRemark?: string | null;
  voucherType?: string | null;
  writeOffAmount?: number | null;
  writeOffBasedOn?: string | null;
};
