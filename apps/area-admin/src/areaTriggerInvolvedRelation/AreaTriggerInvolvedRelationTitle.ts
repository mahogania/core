import { AreaTriggerInvolvedRelation as TAreaTriggerInvolvedRelation } from "../api/areaTriggerInvolvedRelation/AreaTriggerInvolvedRelation";

export const AREATRIGGERINVOLVEDRELATION_TITLE_FIELD = "id";

export const AreaTriggerInvolvedRelationTitle = (
  record: TAreaTriggerInvolvedRelation
): string => {
  return record.id?.toString() || String(record.id);
};
