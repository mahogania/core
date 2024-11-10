import { BlanketOrder as TBlanketOrder } from "../api/blanketOrder/BlanketOrder";

export const BLANKETORDER_TITLE_FIELD = "customerName";

export const BlanketOrderTitle = (record: TBlanketOrder): string => {
  return record.customerName?.toString() || String(record.id);
};
