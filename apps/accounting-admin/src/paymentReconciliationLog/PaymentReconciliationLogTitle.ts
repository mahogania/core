import { PaymentReconciliationLog as TPaymentReconciliationLog } from "../api/paymentReconciliationLog/PaymentReconciliationLog";

export const PAYMENTRECONCILIATIONLOG_TITLE_FIELD = "name";

export const PaymentReconciliationLogTitle = (
  record: TPaymentReconciliationLog
): string => {
  return record.name?.toString() || String(record.id);
};
