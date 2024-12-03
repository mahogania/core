import { AutoRepeatDay as TAutoRepeatDay } from "../api/autoRepeatDay/AutoRepeatDay";

export const AUTOREPEATDAY_TITLE_FIELD = "name";

export const AutoRepeatDayTitle = (record: TAutoRepeatDay): string => {
  return record.name?.toString() || String(record.id);
};
