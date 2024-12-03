import { MaterialRequestPlanItem as TMaterialRequestPlanItem } from "../api/materialRequestPlanItem/MaterialRequestPlanItem";

export const MATERIALREQUESTPLANITEM_TITLE_FIELD = "id";

export const MaterialRequestPlanItemTitle = (
  record: TMaterialRequestPlanItem
): string => {
  return record.id?.toString() || String(record.id);
};
