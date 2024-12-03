import { PaymentLedgerEntry as TPaymentLedgerEntry } from "../api/paymentLedgerEntry/PaymentLedgerEntry";

export const PAYMENTLEDGERENTRY_TITLE_FIELD = "name";

export const PaymentLedgerEntryTitle = (
  record: TPaymentLedgerEntry
): string => {
  return record.name?.toString() || String(record.id);
};
