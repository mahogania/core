import { MaterialRequestItem as TMaterialRequestItem } from "../api/materialRequestItem/MaterialRequestItem";

export const MATERIALREQUESTITEM_TITLE_FIELD = "id";

export const MaterialRequestItemTitle = (
  record: TMaterialRequestItem
): string => {
  return record.id?.toString() || String(record.id);
};
