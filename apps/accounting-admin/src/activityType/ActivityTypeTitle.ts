import { ActivityType as TActivityType } from "../api/activityType/ActivityType";

export const ACTIVITYTYPE_TITLE_FIELD = "name";

export const ActivityTypeTitle = (record: TActivityType): string => {
  return record.name?.toString() || String(record.id);
};
