import * as graphql from "@nestjs/graphql";
import { AssetCapitalizationStockItemResolverBase } from "./base/assetCapitalizationStockItem.resolver.base";
import { AssetCapitalizationStockItem } from "./base/AssetCapitalizationStockItem";
import { AssetCapitalizationStockItemService } from "./assetCapitalizationStockItem.service";

@graphql.Resolver(() => AssetCapitalizationStockItem)
export class AssetCapitalizationStockItemResolver extends AssetCapitalizationStockItemResolverBase {
  constructor(protected readonly service: AssetCapitalizationStockItemService) {
    super(service);
  }
}
