import { ActivityLog as TActivityLog } from "../api/activityLog/ActivityLog";

export const ACTIVITYLOG_TITLE_FIELD = "fullName";

export const ActivityLogTitle = (record: TActivityLog): string => {
  return record.fullName?.toString() || String(record.id);
};
