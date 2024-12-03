import { PosPaymentMethod as TPosPaymentMethod } from "../api/posPaymentMethod/PosPaymentMethod";

export const POSPAYMENTMETHOD_TITLE_FIELD = "name";

export const PosPaymentMethodTitle = (record: TPosPaymentMethod): string => {
  return record.name?.toString() || String(record.id);
};
