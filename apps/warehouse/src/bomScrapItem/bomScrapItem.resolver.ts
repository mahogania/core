import * as graphql from "@nestjs/graphql";
import { BomScrapItemResolverBase } from "./base/bomScrapItem.resolver.base";
import { BomScrapItem } from "./base/BomScrapItem";
import { BomScrapItemService } from "./bomScrapItem.service";

@graphql.Resolver(() => BomScrapItem)
export class BomScrapItemResolver extends BomScrapItemResolverBase {
  constructor(protected readonly service: BomScrapItemService) {
    super(service);
  }
}
