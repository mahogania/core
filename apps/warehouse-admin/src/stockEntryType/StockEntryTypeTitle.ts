import { StockEntryType as TStockEntryType } from "../api/stockEntryType/StockEntryType";

export const STOCKENTRYTYPE_TITLE_FIELD = "name";

export const StockEntryTypeTitle = (record: TStockEntryType): string => {
  return record.name?.toString() || String(record.id);
};
