import * as graphql from "@nestjs/graphql";
import { AssetMovementItemResolverBase } from "./base/assetMovementItem.resolver.base";
import { AssetMovementItem } from "./base/AssetMovementItem";
import { AssetMovementItemService } from "./assetMovementItem.service";

@graphql.Resolver(() => AssetMovementItem)
export class AssetMovementItemResolver extends AssetMovementItemResolverBase {
  constructor(protected readonly service: AssetMovementItemService) {
    super(service);
  }
}
