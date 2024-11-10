import { DashboardChartSourceWhereInput } from "./DashboardChartSourceWhereInput";
import { DashboardChartSourceOrderByInput } from "./DashboardChartSourceOrderByInput";

export type DashboardChartSourceFindManyArgs = {
  where?: DashboardChartSourceWhereInput;
  orderBy?: Array<DashboardChartSourceOrderByInput>;
  skip?: number;
  take?: number;
};
