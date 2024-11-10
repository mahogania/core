import * as graphql from "@nestjs/graphql";
import { ItemPriceResolverBase } from "./base/itemPrice.resolver.base";
import { ItemPrice } from "./base/ItemPrice";
import { ItemPriceService } from "./itemPrice.service";

@graphql.Resolver(() => ItemPrice)
export class ItemPriceResolver extends ItemPriceResolverBase {
  constructor(protected readonly service: ItemPriceService) {
    super(service);
  }
}
