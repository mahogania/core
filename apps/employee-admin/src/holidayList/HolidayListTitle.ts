import { HolidayList as THolidayList } from "../api/holidayList/HolidayList";

export const HOLIDAYLIST_TITLE_FIELD = "holidayListName";

export const HolidayListTitle = (record: THolidayList): string => {
  return record.holidayListName?.toString() || String(record.id);
};
