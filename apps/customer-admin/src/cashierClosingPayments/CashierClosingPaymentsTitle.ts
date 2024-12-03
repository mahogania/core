import { CashierClosingPayments as TCashierClosingPayments } from "../api/cashierClosingPayments/CashierClosingPayments";

export const CASHIERCLOSINGPAYMENTS_TITLE_FIELD = "modeOfPayment";

export const CashierClosingPaymentsTitle = (
  record: TCashierClosingPayments
): string => {
  return record.modeOfPayment?.toString() || String(record.id);
};
