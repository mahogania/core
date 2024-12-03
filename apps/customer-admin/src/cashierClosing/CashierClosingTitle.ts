import { CashierClosing as TCashierClosing } from "../api/cashierClosing/CashierClosing";

export const CASHIERCLOSING_TITLE_FIELD = "amendedFrom";

export const CashierClosingTitle = (record: TCashierClosing): string => {
  return record.amendedFrom?.toString() || String(record.id);
};
