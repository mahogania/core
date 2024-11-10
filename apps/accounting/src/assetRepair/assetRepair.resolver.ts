import * as graphql from "@nestjs/graphql";
import { AssetRepairResolverBase } from "./base/assetRepair.resolver.base";
import { AssetRepair } from "./base/AssetRepair";
import { AssetRepairService } from "./assetRepair.service";

@graphql.Resolver(() => AssetRepair)
export class AssetRepairResolver extends AssetRepairResolverBase {
  constructor(protected readonly service: AssetRepairService) {
    super(service);
  }
}
