import { CustomField as TCustomField } from "../api/customField/CustomField";

export const CUSTOMFIELD_TITLE_FIELD = "fieldname";

export const CustomFieldTitle = (record: TCustomField): string => {
  return record.fieldname?.toString() || String(record.id);
};
