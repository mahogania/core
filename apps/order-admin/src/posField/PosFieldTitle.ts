import { PosField as TPosField } from "../api/posField/PosField";

export const POSFIELD_TITLE_FIELD = "fieldname";

export const PosFieldTitle = (record: TPosField): string => {
  return record.fieldname?.toString() || String(record.id);
};
