import { Dashboard as TDashboard } from "../api/dashboard/Dashboard";

export const DASHBOARD_TITLE_FIELD = "dashboardName";

export const DashboardTitle = (record: TDashboard): string => {
  return record.dashboardName?.toString() || String(record.id);
};
