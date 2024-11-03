import * as graphql from "@nestjs/graphql";
import { DashboardChartFieldResolverBase } from "./base/dashboardChartField.resolver.base";
import { DashboardChartField } from "./base/DashboardChartField";
import { DashboardChartFieldService } from "./dashboardChartField.service";

@graphql.Resolver(() => DashboardChartField)
export class DashboardChartFieldResolver extends DashboardChartFieldResolverBase {
  constructor(protected readonly service: DashboardChartFieldService) {
    super(service);
  }
}
