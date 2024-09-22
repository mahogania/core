import { EventScriptNames as TEventScriptNames } from "../api/eventScriptNames/EventScriptNames";

export const EVENTSCRIPTNAMES_TITLE_FIELD = "scriptName";

export const EventScriptNamesTitle = (record: TEventScriptNames): string => {
  return record.scriptName?.toString() || String(record.id);
};
