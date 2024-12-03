import { PaymentRequest as TPaymentRequest } from "../api/paymentRequest/PaymentRequest";

export const PAYMENTREQUEST_TITLE_FIELD = "name";

export const PaymentRequestTitle = (record: TPaymentRequest): string => {
  return record.name?.toString() || String(record.id);
};
