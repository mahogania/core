import { AreaTriggerCreateProperty as TAreaTriggerCreateProperty } from "../api/areaTriggerCreateProperty/AreaTriggerCreateProperty";

export const AREATRIGGERCREATEPROPERTY_TITLE_FIELD = "scriptName";

export const AreaTriggerCreatePropertyTitle = (
  record: TAreaTriggerCreateProperty
): string => {
  return record.scriptName?.toString() || String(record.id);
};
