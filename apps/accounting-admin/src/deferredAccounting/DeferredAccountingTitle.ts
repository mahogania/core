import { DeferredAccounting as TDeferredAccounting } from "../api/deferredAccounting/DeferredAccounting";

export const DEFERREDACCOUNTING_TITLE_FIELD = "name";

export const DeferredAccountingTitle = (
  record: TDeferredAccounting
): string => {
  return record.name?.toString() || String(record.id);
};
