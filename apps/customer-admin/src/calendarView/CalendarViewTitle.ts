import { CalendarView as TCalendarView } from "../api/calendarView/CalendarView";

export const CALENDARVIEW_TITLE_FIELD = "endDateField";

export const CalendarViewTitle = (record: TCalendarView): string => {
  return record.endDateField?.toString() || String(record.id);
};
