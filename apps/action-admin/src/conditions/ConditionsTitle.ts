import { Conditions as TConditions } from "../api/conditions/Conditions";

export const CONDITIONS_TITLE_FIELD = "scriptName";

export const ConditionsTitle = (record: TConditions): string => {
  return record.scriptName?.toString() || String(record.id);
};
