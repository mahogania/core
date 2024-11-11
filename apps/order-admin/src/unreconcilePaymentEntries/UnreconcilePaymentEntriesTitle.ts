import { UnreconcilePaymentEntries as TUnreconcilePaymentEntries } from "../api/unreconcilePaymentEntries/UnreconcilePaymentEntries";

export const UNRECONCILEPAYMENTENTRIES_TITLE_FIELD = "name";

export const UnreconcilePaymentEntriesTitle = (
  record: TUnreconcilePaymentEntries
): string => {
  return record.name?.toString() || String(record.id);
};
