import { DocType as TDocType } from "../api/docType/DocType";

export const DOCTYPE_TITLE_FIELD = "allowRename";

export const DocTypeTitle = (record: TDocType): string => {
  return record.allowRename?.toString() || String(record.id);
};
