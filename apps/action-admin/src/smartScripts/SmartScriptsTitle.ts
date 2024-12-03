import { SmartScripts as TSmartScripts } from "../api/smartScripts/SmartScripts";

export const SMARTSCRIPTS_TITLE_FIELD = "id";

export const SmartScriptsTitle = (record: TSmartScripts): string => {
  return record.id?.toString() || String(record.id);
};
