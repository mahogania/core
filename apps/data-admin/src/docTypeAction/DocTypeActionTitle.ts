import { DocTypeAction as TDocTypeAction } from "../api/docTypeAction/DocTypeAction";

export const DOCTYPEACTION_TITLE_FIELD = "name";

export const DocTypeActionTitle = (record: TDocTypeAction): string => {
  return record.name?.toString() || String(record.id);
};
