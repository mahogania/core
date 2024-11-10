import * as graphql from "@nestjs/graphql";
import { ItemTaxResolverBase } from "./base/itemTax.resolver.base";
import { ItemTax } from "./base/ItemTax";
import { ItemTaxService } from "./itemTax.service";

@graphql.Resolver(() => ItemTax)
export class ItemTaxResolver extends ItemTaxResolverBase {
  constructor(protected readonly service: ItemTaxService) {
    super(service);
  }
}
