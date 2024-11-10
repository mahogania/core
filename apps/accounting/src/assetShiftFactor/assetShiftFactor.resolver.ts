import * as graphql from "@nestjs/graphql";
import { AssetShiftFactorResolverBase } from "./base/assetShiftFactor.resolver.base";
import { AssetShiftFactor } from "./base/AssetShiftFactor";
import { AssetShiftFactorService } from "./assetShiftFactor.service";

@graphql.Resolver(() => AssetShiftFactor)
export class AssetShiftFactorResolver extends AssetShiftFactorResolverBase {
  constructor(protected readonly service: AssetShiftFactorService) {
    super(service);
  }
}
