import { DashboardSettings as TDashboardSettings } from "../api/dashboardSettings/DashboardSettings";

export const DASHBOARDSETTINGS_TITLE_FIELD = "modifiedBy";

export const DashboardSettingsTitle = (record: TDashboardSettings): string => {
  return record.modifiedBy?.toString() || String(record.id);
};
