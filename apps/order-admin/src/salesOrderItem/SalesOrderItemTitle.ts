import { SalesOrderItem as TSalesOrderItem } from "../api/salesOrderItem/SalesOrderItem";

export const SALESORDERITEM_TITLE_FIELD = "itemName";

export const SalesOrderItemTitle = (record: TSalesOrderItem): string => {
  return record.itemName?.toString() || String(record.id);
};
