import { BlanketOrderItem as TBlanketOrderItem } from "../api/blanketOrderItem/BlanketOrderItem";

export const BLANKETORDERITEM_TITLE_FIELD = "itemName";

export const BlanketOrderItemTitle = (record: TBlanketOrderItem): string => {
  return record.itemName?.toString() || String(record.id);
};
