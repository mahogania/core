import * as graphql from "@nestjs/graphql";
import { AssetValueAdjustmentResolverBase } from "./base/assetValueAdjustment.resolver.base";
import { AssetValueAdjustment } from "./base/AssetValueAdjustment";
import { AssetValueAdjustmentService } from "./assetValueAdjustment.service";

@graphql.Resolver(() => AssetValueAdjustment)
export class AssetValueAdjustmentResolver extends AssetValueAdjustmentResolverBase {
  constructor(protected readonly service: AssetValueAdjustmentService) {
    super(service);
  }
}
