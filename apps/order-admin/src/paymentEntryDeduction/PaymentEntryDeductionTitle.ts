import { PaymentEntryDeduction as TPaymentEntryDeduction } from "../api/paymentEntryDeduction/PaymentEntryDeduction";

export const PAYMENTENTRYDEDUCTION_TITLE_FIELD = "name";

export const PaymentEntryDeductionTitle = (
  record: TPaymentEntryDeduction
): string => {
  return record.name?.toString() || String(record.id);
};
