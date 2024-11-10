import { ClosingStockBalance as TClosingStockBalance } from "../api/closingStockBalance/ClosingStockBalance";

export const CLOSINGSTOCKBALANCE_TITLE_FIELD = "amendedFrom";

export const ClosingStockBalanceTitle = (
  record: TClosingStockBalance
): string => {
  return record.amendedFrom?.toString() || String(record.id);
};
