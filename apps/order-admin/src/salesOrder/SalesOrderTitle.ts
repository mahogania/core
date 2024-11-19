import { SalesOrder as TSalesOrder } from "../api/salesOrder/SalesOrder";

export const SALESORDER_TITLE_FIELD = "customerName";

export const SalesOrderTitle = (record: TSalesOrder): string => {
  return record.customerName?.toString() || String(record.id);
};
