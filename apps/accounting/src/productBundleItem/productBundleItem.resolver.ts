import * as graphql from "@nestjs/graphql";
import { ProductBundleItemResolverBase } from "./base/productBundleItem.resolver.base";
import { ProductBundleItem } from "./base/ProductBundleItem";
import { ProductBundleItemService } from "./productBundleItem.service";

@graphql.Resolver(() => ProductBundleItem)
export class ProductBundleItemResolver extends ProductBundleItemResolverBase {
  constructor(protected readonly service: ProductBundleItemService) {
    super(service);
  }
}
