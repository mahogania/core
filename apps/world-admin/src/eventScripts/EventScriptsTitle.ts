import { EventScripts as TEventScripts } from "../api/eventScripts/EventScripts";

export const EVENTSCRIPTS_TITLE_FIELD = "comment";

export const EventScriptsTitle = (record: TEventScripts): string => {
  return record.comment?.toString() || String(record.id);
};
