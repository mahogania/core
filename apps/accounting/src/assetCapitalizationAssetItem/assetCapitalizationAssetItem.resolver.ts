import * as graphql from "@nestjs/graphql";
import { AssetCapitalizationAssetItemResolverBase } from "./base/assetCapitalizationAssetItem.resolver.base";
import { AssetCapitalizationAssetItem } from "./base/AssetCapitalizationAssetItem";
import { AssetCapitalizationAssetItemService } from "./assetCapitalizationAssetItem.service";

@graphql.Resolver(() => AssetCapitalizationAssetItem)
export class AssetCapitalizationAssetItemResolver extends AssetCapitalizationAssetItemResolverBase {
  constructor(protected readonly service: AssetCapitalizationAssetItemService) {
    super(service);
  }
}
