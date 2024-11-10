import * as graphql from "@nestjs/graphql";
import { DashboardChartResolverBase } from "./base/dashboardChart.resolver.base";
import { DashboardChart } from "./base/DashboardChart";
import { DashboardChartService } from "./dashboardChart.service";

@graphql.Resolver(() => DashboardChart)
export class DashboardChartResolver extends DashboardChartResolverBase {
  constructor(protected readonly service: DashboardChartService) {
    super(service);
  }
}
