import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JournalEntryWhereInput = {
  amendedFrom?: StringNullableFilter;
  applyTds?: IntNullableFilter;
  autoRepeat?: StringNullableFilter;
  billDate?: DateTimeNullableFilter;
  billNo?: StringNullableFilter;
  chequeDate?: DateTimeNullableFilter;
  chequeNo?: StringNullableFilter;
  clearanceDate?: DateTimeNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  difference?: FloatNullableFilter;
  docstatus?: IntNullableFilter;
  dueDate?: DateTimeNullableFilter;
  financeBook?: StringNullableFilter;
  fromTemplate?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  interCompanyJournalEntryReference?: StringNullableFilter;
  isOpening?: StringNullableFilter;
  isSystemGenerated?: IntNullableFilter;
  letterHead?: StringNullableFilter;
  modeOfPayment?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  multiCurrency?: IntNullableFilter;
  namingSeries?: StringNullableFilter;
  owner?: StringNullableFilter;
  paidLoan?: StringNullableFilter;
  payToRecdFrom?: StringNullableFilter;
  paymentOrder?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
  processDeferredAccounting?: StringNullableFilter;
  remark?: StringNullableFilter;
  reversalOf?: StringNullableFilter;
  selectPrintHeading?: StringNullableFilter;
  stockEntry?: StringNullableFilter;
  taxWithholdingCategory?: StringNullableFilter;
  title?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
  totalAmountCurrency?: StringNullableFilter;
  totalAmountInWords?: StringNullableFilter;
  totalCredit?: FloatNullableFilter;
  totalDebit?: FloatNullableFilter;
  userRemark?: StringNullableFilter;
  voucherType?: StringNullableFilter;
  writeOffAmount?: FloatNullableFilter;
  writeOffBasedOn?: StringNullableFilter;
};
