import { CustomizeFormField as TCustomizeFormField } from "../api/customizeFormField/CustomizeFormField";

export const CUSTOMIZEFORMFIELD_TITLE_FIELD = "fieldname";

export const CustomizeFormFieldTitle = (
  record: TCustomizeFormField
): string => {
  return record.fieldname?.toString() || String(record.id);
};
