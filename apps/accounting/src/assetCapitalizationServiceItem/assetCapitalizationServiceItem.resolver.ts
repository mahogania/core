import * as graphql from "@nestjs/graphql";
import { AssetCapitalizationServiceItemResolverBase } from "./base/assetCapitalizationServiceItem.resolver.base";
import { AssetCapitalizationServiceItem } from "./base/AssetCapitalizationServiceItem";
import { AssetCapitalizationServiceItemService } from "./assetCapitalizationServiceItem.service";

@graphql.Resolver(() => AssetCapitalizationServiceItem)
export class AssetCapitalizationServiceItemResolver extends AssetCapitalizationServiceItemResolverBase {
  constructor(
    protected readonly service: AssetCapitalizationServiceItemService
  ) {
    super(service);
  }
}
