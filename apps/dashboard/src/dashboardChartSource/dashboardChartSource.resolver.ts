import * as graphql from "@nestjs/graphql";
import { DashboardChartSourceResolverBase } from "./base/dashboardChartSource.resolver.base";
import { DashboardChartSource } from "./base/DashboardChartSource";
import { DashboardChartSourceService } from "./dashboardChartSource.service";

@graphql.Resolver(() => DashboardChartSource)
export class DashboardChartSourceResolver extends DashboardChartSourceResolverBase {
  constructor(protected readonly service: DashboardChartSourceService) {
    super(service);
  }
}
