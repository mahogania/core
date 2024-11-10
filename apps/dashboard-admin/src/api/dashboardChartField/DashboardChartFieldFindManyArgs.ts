import { DashboardChartFieldWhereInput } from "./DashboardChartFieldWhereInput";
import { DashboardChartFieldOrderByInput } from "./DashboardChartFieldOrderByInput";

export type DashboardChartFieldFindManyArgs = {
  where?: DashboardChartFieldWhereInput;
  orderBy?: Array<DashboardChartFieldOrderByInput>;
  skip?: number;
  take?: number;
};
