import { SerialAndBatchEntry as TSerialAndBatchEntry } from "../api/serialAndBatchEntry/SerialAndBatchEntry";

export const SERIALANDBATCHENTRY_TITLE_FIELD = "name";

export const SerialAndBatchEntryTitle = (
  record: TSerialAndBatchEntry
): string => {
  return record.name?.toString() || String(record.id);
};
