import { MaintenanceSchedule as TMaintenanceSchedule } from "../api/maintenanceSchedule/MaintenanceSchedule";

export const MAINTENANCESCHEDULE_TITLE_FIELD = "customerName";

export const MaintenanceScheduleTitle = (
  record: TMaintenanceSchedule
): string => {
  return record.customerName?.toString() || String(record.id);
};
