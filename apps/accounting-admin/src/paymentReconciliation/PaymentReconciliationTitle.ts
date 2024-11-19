import { PaymentReconciliation as TPaymentReconciliation } from "../api/paymentReconciliation/PaymentReconciliation";

export const PAYMENTRECONCILIATION_TITLE_FIELD = "name";

export const PaymentReconciliationTitle = (
  record: TPaymentReconciliation
): string => {
  return record.name?.toString() || String(record.id);
};
