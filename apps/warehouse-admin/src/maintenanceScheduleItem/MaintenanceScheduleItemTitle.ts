import { MaintenanceScheduleItem as TMaintenanceScheduleItem } from "../api/maintenanceScheduleItem/MaintenanceScheduleItem";

export const MAINTENANCESCHEDULEITEM_TITLE_FIELD = "itemName";

export const MaintenanceScheduleItemTitle = (
  record: TMaintenanceScheduleItem
): string => {
  return record.itemName?.toString() || String(record.id);
};
