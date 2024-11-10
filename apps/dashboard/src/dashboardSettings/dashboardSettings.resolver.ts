import * as graphql from "@nestjs/graphql";
import { DashboardSettingsResolverBase } from "./base/dashboardSettings.resolver.base";
import { DashboardSettings } from "./base/DashboardSettings";
import { DashboardSettingsService } from "./dashboardSettings.service";

@graphql.Resolver(() => DashboardSettings)
export class DashboardSettingsResolver extends DashboardSettingsResolverBase {
  constructor(protected readonly service: DashboardSettingsService) {
    super(service);
  }
}
