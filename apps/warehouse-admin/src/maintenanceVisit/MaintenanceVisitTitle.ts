import { MaintenanceVisit as TMaintenanceVisit } from "../api/maintenanceVisit/MaintenanceVisit";

export const MAINTENANCEVISIT_TITLE_FIELD = "customerName";

export const MaintenanceVisitTitle = (record: TMaintenanceVisit): string => {
  return record.customerName?.toString() || String(record.id);
};
