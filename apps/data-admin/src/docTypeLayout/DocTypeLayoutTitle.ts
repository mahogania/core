import { DocTypeLayout as TDocTypeLayout } from "../api/docTypeLayout/DocTypeLayout";

export const DOCTYPELAYOUT_TITLE_FIELD = "name";

export const DocTypeLayoutTitle = (record: TDocTypeLayout): string => {
  return record.name?.toString() || String(record.id);
};
