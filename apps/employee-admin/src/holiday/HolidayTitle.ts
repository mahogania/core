import { Holiday as THoliday } from "../api/holiday/Holiday";

export const HOLIDAY_TITLE_FIELD = "name";

export const HolidayTitle = (record: THoliday): string => {
  return record.name?.toString() || String(record.id);
};
