import { DocTypeLayoutField as TDocTypeLayoutField } from "../api/docTypeLayoutField/DocTypeLayoutField";

export const DOCTYPELAYOUTFIELD_TITLE_FIELD = "fieldname";

export const DocTypeLayoutFieldTitle = (
  record: TDocTypeLayoutField
): string => {
  return record.fieldname?.toString() || String(record.id);
};
