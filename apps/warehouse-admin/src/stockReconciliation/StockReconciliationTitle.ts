import { StockReconciliation as TStockReconciliation } from "../api/stockReconciliation/StockReconciliation";

export const STOCKRECONCILIATION_TITLE_FIELD = "name";

export const StockReconciliationTitle = (
  record: TStockReconciliation
): string => {
  return record.name?.toString() || String(record.id);
};
