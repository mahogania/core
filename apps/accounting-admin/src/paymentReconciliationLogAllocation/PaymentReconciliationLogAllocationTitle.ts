import { PaymentReconciliationLogAllocation as TPaymentReconciliationLogAllocation } from "../api/paymentReconciliationLogAllocation/PaymentReconciliationLogAllocation";

export const PAYMENTRECONCILIATIONLOGALLOCATION_TITLE_FIELD = "name";

export const PaymentReconciliationLogAllocationTitle = (
  record: TPaymentReconciliationLogAllocation
): string => {
  return record.name?.toString() || String(record.id);
};
