import * as graphql from "@nestjs/graphql";
import { DashboardChartLinkResolverBase } from "./base/dashboardChartLink.resolver.base";
import { DashboardChartLink } from "./base/DashboardChartLink";
import { DashboardChartLinkService } from "./dashboardChartLink.service";

@graphql.Resolver(() => DashboardChartLink)
export class DashboardChartLinkResolver extends DashboardChartLinkResolverBase {
  constructor(protected readonly service: DashboardChartLinkService) {
    super(service);
  }
}
