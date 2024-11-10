import { BankTransactionPayments as TBankTransactionPayments } from "../api/bankTransactionPayments/BankTransactionPayments";

export const BANKTRANSACTIONPAYMENTS_TITLE_FIELD = "name";

export const BankTransactionPaymentsTitle = (
  record: TBankTransactionPayments
): string => {
  return record.name?.toString() || String(record.id);
};
