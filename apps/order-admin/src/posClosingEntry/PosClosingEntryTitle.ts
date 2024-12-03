import { PosClosingEntry as TPosClosingEntry } from "../api/posClosingEntry/PosClosingEntry";

export const POSCLOSINGENTRY_TITLE_FIELD = "name";

export const PosClosingEntryTitle = (record: TPosClosingEntry): string => {
  return record.name?.toString() || String(record.id);
};
