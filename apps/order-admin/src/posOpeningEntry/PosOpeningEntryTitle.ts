import { PosOpeningEntry as TPosOpeningEntry } from "../api/posOpeningEntry/PosOpeningEntry";

export const POSOPENINGENTRY_TITLE_FIELD = "name";

export const PosOpeningEntryTitle = (record: TPosOpeningEntry): string => {
  return record.name?.toString() || String(record.id);
};
