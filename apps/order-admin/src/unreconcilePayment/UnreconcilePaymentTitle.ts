import { UnreconcilePayment as TUnreconcilePayment } from "../api/unreconcilePayment/UnreconcilePayment";

export const UNRECONCILEPAYMENT_TITLE_FIELD = "name";

export const UnreconcilePaymentTitle = (
  record: TUnreconcilePayment
): string => {
  return record.name?.toString() || String(record.id);
};
