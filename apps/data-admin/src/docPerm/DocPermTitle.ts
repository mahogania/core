import { DocPerm as TDocPerm } from "../api/docPerm/DocPerm";

export const DOCPERM_TITLE_FIELD = "name";

export const DocPermTitle = (record: TDocPerm): string => {
  return record.name?.toString() || String(record.id);
};
