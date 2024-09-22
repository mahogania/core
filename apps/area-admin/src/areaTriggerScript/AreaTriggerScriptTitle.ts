import { AreaTriggerScript as TAreaTriggerScript } from "../api/areaTriggerScript/AreaTriggerScript";

export const AREATRIGGERSCRIPT_TITLE_FIELD = "scriptName";

export const AreaTriggerScriptTitle = (record: TAreaTriggerScript): string => {
  return record.scriptName?.toString() || String(record.id);
};
