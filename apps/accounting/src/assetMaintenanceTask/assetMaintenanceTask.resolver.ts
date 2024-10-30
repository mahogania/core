import * as graphql from "@nestjs/graphql";
import { AssetMaintenanceTaskResolverBase } from "./base/assetMaintenanceTask.resolver.base";
import { AssetMaintenanceTask } from "./base/AssetMaintenanceTask";
import { AssetMaintenanceTaskService } from "./assetMaintenanceTask.service";

@graphql.Resolver(() => AssetMaintenanceTask)
export class AssetMaintenanceTaskResolver extends AssetMaintenanceTaskResolverBase {
  constructor(protected readonly service: AssetMaintenanceTaskService) {
    super(service);
  }
}
