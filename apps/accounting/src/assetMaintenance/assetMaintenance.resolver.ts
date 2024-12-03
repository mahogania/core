import * as graphql from "@nestjs/graphql";
import { AssetMaintenanceResolverBase } from "./base/assetMaintenance.resolver.base";
import { AssetMaintenance } from "./base/AssetMaintenance";
import { AssetMaintenanceService } from "./assetMaintenance.service";

@graphql.Resolver(() => AssetMaintenance)
export class AssetMaintenanceResolver extends AssetMaintenanceResolverBase {
  constructor(protected readonly service: AssetMaintenanceService) {
    super(service);
  }
}
