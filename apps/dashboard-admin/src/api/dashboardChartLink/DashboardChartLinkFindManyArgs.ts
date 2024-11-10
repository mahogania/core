import { DashboardChartLinkWhereInput } from "./DashboardChartLinkWhereInput";
import { DashboardChartLinkOrderByInput } from "./DashboardChartLinkOrderByInput";

export type DashboardChartLinkFindManyArgs = {
  where?: DashboardChartLinkWhereInput;
  orderBy?: Array<DashboardChartLinkOrderByInput>;
  skip?: number;
  take?: number;
};
