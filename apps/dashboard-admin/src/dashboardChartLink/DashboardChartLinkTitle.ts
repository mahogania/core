import { DashboardChartLink as TDashboardChartLink } from "../api/dashboardChartLink/DashboardChartLink";

export const DASHBOARDCHARTLINK_TITLE_FIELD = "chart";

export const DashboardChartLinkTitle = (
  record: TDashboardChartLink
): string => {
  return record.chart?.toString() || String(record.id);
};
