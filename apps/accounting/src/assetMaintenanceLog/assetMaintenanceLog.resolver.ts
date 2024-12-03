import * as graphql from "@nestjs/graphql";
import { AssetMaintenanceLogResolverBase } from "./base/assetMaintenanceLog.resolver.base";
import { AssetMaintenanceLog } from "./base/AssetMaintenanceLog";
import { AssetMaintenanceLogService } from "./assetMaintenanceLog.service";

@graphql.Resolver(() => AssetMaintenanceLog)
export class AssetMaintenanceLogResolver extends AssetMaintenanceLogResolverBase {
  constructor(protected readonly service: AssetMaintenanceLogService) {
    super(service);
  }
}
