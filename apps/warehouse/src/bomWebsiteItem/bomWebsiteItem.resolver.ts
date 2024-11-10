import * as graphql from "@nestjs/graphql";
import { BomWebsiteItemResolverBase } from "./base/bomWebsiteItem.resolver.base";
import { BomWebsiteItem } from "./base/BomWebsiteItem";
import { BomWebsiteItemService } from "./bomWebsiteItem.service";

@graphql.Resolver(() => BomWebsiteItem)
export class BomWebsiteItemResolver extends BomWebsiteItemResolverBase {
  constructor(protected readonly service: BomWebsiteItemService) {
    super(service);
  }
}
