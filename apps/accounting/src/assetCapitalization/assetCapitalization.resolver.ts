import * as graphql from "@nestjs/graphql";
import { AssetCapitalizationResolverBase } from "./base/assetCapitalization.resolver.base";
import { AssetCapitalization } from "./base/AssetCapitalization";
import { AssetCapitalizationService } from "./assetCapitalization.service";

@graphql.Resolver(() => AssetCapitalization)
export class AssetCapitalizationResolver extends AssetCapitalizationResolverBase {
  constructor(protected readonly service: AssetCapitalizationService) {
    super(service);
  }
}
