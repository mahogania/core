import { StockEntryDetail as TStockEntryDetail } from "../api/stockEntryDetail/StockEntryDetail";

export const STOCKENTRYDETAIL_TITLE_FIELD = "itemName";

export const StockEntryDetailTitle = (record: TStockEntryDetail): string => {
  return record.itemName?.toString() || String(record.id);
};
