import { PaymentOrderReference as TPaymentOrderReference } from "../api/paymentOrderReference/PaymentOrderReference";

export const PAYMENTORDERREFERENCE_TITLE_FIELD = "name";

export const PaymentOrderReferenceTitle = (
  record: TPaymentOrderReference
): string => {
  return record.name?.toString() || String(record.id);
};
