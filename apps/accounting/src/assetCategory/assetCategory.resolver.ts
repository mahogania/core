import * as graphql from "@nestjs/graphql";
import { AssetCategoryResolverBase } from "./base/assetCategory.resolver.base";
import { AssetCategory } from "./base/AssetCategory";
import { AssetCategoryService } from "./assetCategory.service";

@graphql.Resolver(() => AssetCategory)
export class AssetCategoryResolver extends AssetCategoryResolverBase {
  constructor(protected readonly service: AssetCategoryService) {
    super(service);
  }
}
