import { DocTypeLink as TDocTypeLink } from "../api/docTypeLink/DocTypeLink";

export const DOCTYPELINK_TITLE_FIELD = "linkFieldname";

export const DocTypeLinkTitle = (record: TDocTypeLink): string => {
  return record.linkFieldname?.toString() || String(record.id);
};
