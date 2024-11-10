import * as graphql from "@nestjs/graphql";
import { AssetDepreciationScheduleResolverBase } from "./base/assetDepreciationSchedule.resolver.base";
import { AssetDepreciationSchedule } from "./base/AssetDepreciationSchedule";
import { AssetDepreciationScheduleService } from "./assetDepreciationSchedule.service";

@graphql.Resolver(() => AssetDepreciationSchedule)
export class AssetDepreciationScheduleResolver extends AssetDepreciationScheduleResolverBase {
  constructor(protected readonly service: AssetDepreciationScheduleService) {
    super(service);
  }
}
