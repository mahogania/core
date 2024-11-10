import { DocShare as TDocShare } from "../api/docShare/DocShare";

export const DOCSHARE_TITLE_FIELD = "name";

export const DocShareTitle = (record: TDocShare): string => {
  return record.name?.toString() || String(record.id);
};
