import { DocField as TDocField } from "../api/docField/DocField";

export const DOCFIELD_TITLE_FIELD = "fieldname";

export const DocFieldTitle = (record: TDocField): string => {
  return record.fieldname?.toString() || String(record.id);
};
