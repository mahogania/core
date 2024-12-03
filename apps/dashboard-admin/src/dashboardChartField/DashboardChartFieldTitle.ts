import { DashboardChartField as TDashboardChartField } from "../api/dashboardChartField/DashboardChartField";

export const DASHBOARDCHARTFIELD_TITLE_FIELD = "color";

export const DashboardChartFieldTitle = (
  record: TDashboardChartField
): string => {
  return record.color?.toString() || String(record.id);
};
