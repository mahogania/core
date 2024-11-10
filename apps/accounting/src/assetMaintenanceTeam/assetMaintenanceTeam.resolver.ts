import * as graphql from "@nestjs/graphql";
import { AssetMaintenanceTeamResolverBase } from "./base/assetMaintenanceTeam.resolver.base";
import { AssetMaintenanceTeam } from "./base/AssetMaintenanceTeam";
import { AssetMaintenanceTeamService } from "./assetMaintenanceTeam.service";

@graphql.Resolver(() => AssetMaintenanceTeam)
export class AssetMaintenanceTeamResolver extends AssetMaintenanceTeamResolverBase {
  constructor(protected readonly service: AssetMaintenanceTeamService) {
    super(service);
  }
}
