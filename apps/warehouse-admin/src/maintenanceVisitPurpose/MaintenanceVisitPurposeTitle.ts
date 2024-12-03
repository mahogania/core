import { MaintenanceVisitPurpose as TMaintenanceVisitPurpose } from "../api/maintenanceVisitPurpose/MaintenanceVisitPurpose";

export const MAINTENANCEVISITPURPOSE_TITLE_FIELD = "itemName";

export const MaintenanceVisitPurposeTitle = (
  record: TMaintenanceVisitPurpose
): string => {
  return record.itemName?.toString() || String(record.id);
};
