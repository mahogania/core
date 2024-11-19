import { ModeOfPayment as TModeOfPayment } from "../api/modeOfPayment/ModeOfPayment";

export const MODEOFPAYMENT_TITLE_FIELD = "name";

export const ModeOfPaymentTitle = (record: TModeOfPayment): string => {
  return record.name?.toString() || String(record.id);
};
