import { StockReservationEntry as TStockReservationEntry } from "../api/stockReservationEntry/StockReservationEntry";

export const STOCKRESERVATIONENTRY_TITLE_FIELD = "name";

export const StockReservationEntryTitle = (
  record: TStockReservationEntry
): string => {
  return record.name?.toString() || String(record.id);
};
