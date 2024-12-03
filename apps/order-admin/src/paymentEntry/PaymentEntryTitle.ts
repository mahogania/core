import { PaymentEntry as TPaymentEntry } from "../api/paymentEntry/PaymentEntry";

export const PAYMENTENTRY_TITLE_FIELD = "name";

export const PaymentEntryTitle = (record: TPaymentEntry): string => {
  return record.name?.toString() || String(record.id);
};
