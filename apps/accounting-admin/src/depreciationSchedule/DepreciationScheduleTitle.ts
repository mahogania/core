import { DepreciationSchedule as TDepreciationSchedule } from "../api/depreciationSchedule/DepreciationSchedule";

export const DEPRECIATIONSCHEDULE_TITLE_FIELD = "name";

export const DepreciationScheduleTitle = (
  record: TDepreciationSchedule
): string => {
  return record.name?.toString() || String(record.id);
};
