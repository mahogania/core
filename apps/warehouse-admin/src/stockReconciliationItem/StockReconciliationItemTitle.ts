import { StockReconciliationItem as TStockReconciliationItem } from "../api/stockReconciliationItem/StockReconciliationItem";

export const STOCKRECONCILIATIONITEM_TITLE_FIELD = "itemName";

export const StockReconciliationItemTitle = (
  record: TStockReconciliationItem
): string => {
  return record.itemName?.toString() || String(record.id);
};
