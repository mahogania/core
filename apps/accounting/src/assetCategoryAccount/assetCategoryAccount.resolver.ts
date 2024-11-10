import * as graphql from "@nestjs/graphql";
import { AssetCategoryAccountResolverBase } from "./base/assetCategoryAccount.resolver.base";
import { AssetCategoryAccount } from "./base/AssetCategoryAccount";
import { AssetCategoryAccountService } from "./assetCategoryAccount.service";

@graphql.Resolver(() => AssetCategoryAccount)
export class AssetCategoryAccountResolver extends AssetCategoryAccountResolverBase {
  constructor(protected readonly service: AssetCategoryAccountService) {
    super(service);
  }
}
