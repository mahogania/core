import { DashboardChartWhereInput } from "./DashboardChartWhereInput";
import { DashboardChartOrderByInput } from "./DashboardChartOrderByInput";

export type DashboardChartFindManyArgs = {
  where?: DashboardChartWhereInput;
  orderBy?: Array<DashboardChartOrderByInput>;
  skip?: number;
  take?: number;
};
