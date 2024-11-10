import * as graphql from "@nestjs/graphql";
import { AssetRepairConsumedItemResolverBase } from "./base/assetRepairConsumedItem.resolver.base";
import { AssetRepairConsumedItem } from "./base/AssetRepairConsumedItem";
import { AssetRepairConsumedItemService } from "./assetRepairConsumedItem.service";

@graphql.Resolver(() => AssetRepairConsumedItem)
export class AssetRepairConsumedItemResolver extends AssetRepairConsumedItemResolverBase {
  constructor(protected readonly service: AssetRepairConsumedItemService) {
    super(service);
  }
}
