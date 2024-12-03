import { DocTypeState as TDocTypeState } from "../api/docTypeState/DocTypeState";

export const DOCTYPESTATE_TITLE_FIELD = "name";

export const DocTypeStateTitle = (record: TDocTypeState): string => {
  return record.name?.toString() || String(record.id);
};
