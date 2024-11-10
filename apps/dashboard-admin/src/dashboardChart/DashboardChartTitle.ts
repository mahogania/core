import { DashboardChart as TDashboardChart } from "../api/dashboardChart/DashboardChart";

export const DASHBOARDCHART_TITLE_FIELD = "chartName";

export const DashboardChartTitle = (record: TDashboardChart): string => {
  return record.chartName?.toString() || String(record.id);
};
