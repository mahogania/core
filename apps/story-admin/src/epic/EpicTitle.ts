import { Epic as TEpic } from "../api/epic/Epic";

export const EPIC_TITLE_FIELD = "id";

export const EpicTitle = (record: TEpic): string => {
  return record.id?.toString() || String(record.id);
};
