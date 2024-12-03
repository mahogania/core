import { PaymentEntryReference as TPaymentEntryReference } from "../api/paymentEntryReference/PaymentEntryReference";

export const PAYMENTENTRYREFERENCE_TITLE_FIELD = "name";

export const PaymentEntryReferenceTitle = (
  record: TPaymentEntryReference
): string => {
  return record.name?.toString() || String(record.id);
};
