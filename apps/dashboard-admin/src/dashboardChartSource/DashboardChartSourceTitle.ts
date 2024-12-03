import { DashboardChartSource as TDashboardChartSource } from "../api/dashboardChartSource/DashboardChartSource";

export const DASHBOARDCHARTSOURCE_TITLE_FIELD = "sourceName";

export const DashboardChartSourceTitle = (
  record: TDashboardChartSource
): string => {
  return record.sourceName?.toString() || String(record.id);
};
