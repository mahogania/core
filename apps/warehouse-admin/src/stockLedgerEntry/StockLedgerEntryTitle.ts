import { StockLedgerEntry as TStockLedgerEntry } from "../api/stockLedgerEntry/StockLedgerEntry";

export const STOCKLEDGERENTRY_TITLE_FIELD = "name";

export const StockLedgerEntryTitle = (record: TStockLedgerEntry): string => {
  return record.name?.toString() || String(record.id);
};
